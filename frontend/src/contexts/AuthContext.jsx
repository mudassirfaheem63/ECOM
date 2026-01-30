import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Auth Context
const AuthContext = createContext();

// Configure axios defaults
const api = axios.create({
  baseURL: import.meta.env.VITE_Backend || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        
        if (token && userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Register function - automatically logs in after successful registration
  const register = async (name, email, password, phone = '', address = '') => {
    try {
      setLoading(true);
      const response = await api.post('/api/auth/register', {
        name,
        email,
        password,
        phone,
        address,
      });

      if (response.data.token) {
        // Store token and user data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Update state
        setUser(response.data.user);
        setIsAuthenticated(true);

        return {
          success: true,
          message: response.data.message || 'Registration successful!',
          user: response.data.user,
        };
      }

      return { success: false, message: 'Registration failed' };
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await api.post('/api/auth/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Store token and user data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Update state
        setUser(response.data.user);
        setIsAuthenticated(true);

        return {
          success: true,
          message: response.data.message || 'Login successful!',
          user: response.data.user,
        };
      }

      return { success: false, message: 'Login failed' };
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed. Please try again.';
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Get user profile
  const getProfile = async () => {
    try {
      const response = await api.get('/api/auth/profile');
      
      if (response.data) {
        const updatedUser = {
          id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          role: response.data.role,
          phone: response.data.phone,
          address: response.data.address,
        };
        
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        
        return { success: true, user: updatedUser };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to fetch profile';
      return { success: false, message };
    }
  };

  // Update user profile
  const updateProfile = async (name, phone = '', address = '') => {
    try {
      const response = await api.put('/api/auth/profile', {
        name,
        phone,
        address,
      });

      if (response.data.user) {
        const updatedUser = {
          ...user,
          name: response.data.user.name,
          phone: response.data.user.phone,
          address: response.data.user.address,
        };
        
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);

        return {
          success: true,
          message: response.data.message || 'Profile updated successfully',
          user: updatedUser,
        };
      }

      return { success: false, message: 'Update failed' };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to update profile';
      return { success: false, message };
    }
  };

  // Change password
  const changePassword = async (currentPassword, newPassword) => {
    try {
      const response = await api.put('/api/auth/change-password', {
        currentPassword,
        newPassword,
      });

      return {
        success: true,
        message: response.data.message || 'Password changed successfully',
      };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to change password';
      return { success: false, message };
    }
  };

  // Check if user is admin
  const isAdmin = () => {
    return user?.role === 'admin';
  };

  // Check if user has specific role
  const hasRole = (role) => {
    return user?.role === role;
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    getProfile,
    updateProfile,
    changePassword,
    isAdmin,
    hasRole,
    api, // Expose configured axios instance for other components
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context - exported separately to avoid fast refresh issues
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}