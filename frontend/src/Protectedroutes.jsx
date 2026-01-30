import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

/**
 * ProtectedRoute Component
 * 
 * Usage examples:
 * 
 * 1. Protect a route (any authenticated user):
 *    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
 * 
 * 2. Admin-only route:
 *    <Route path="/admin" element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
 * 
 * 3. Specific role required:
 *    <Route path="/moderator" element={<ProtectedRoute requiredRole="moderator"><ModPanel /></ProtectedRoute>} />
 */
const ProtectedRoute = ({ 
  children, 
  requireAdmin = false, 
  requiredRole = null,
  redirectTo = '/login' 
}) => {
  const { isAuthenticated, user, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Not authenticated - redirect to login
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Admin access required
  if (requireAdmin && user?.role !== 'admin') {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          <h4>Access Denied</h4>
          <p>You need administrator privileges to access this page.</p>
        </div>
      </div>
    );
  }

  // Specific role required
  if (requiredRole && user?.role !== requiredRole) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          <h4>Access Denied</h4>
          <p>You don't have the required permissions to access this page.</p>
        </div>
      </div>
    );
  }

  // User is authenticated and authorized
  return children;
};

export default ProtectedRoute;