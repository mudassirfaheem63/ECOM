import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import HeroHeader from '../components/HeroHeader';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    const result = await login(formData.email, formData.password);

    if (result.success) {
      // Navigate to home page after successful login
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <HeroHeader title="Login" />

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="text-primary mb-4 text-center">
                <span className="fw-light text-dark">Welcome Back</span> Login
              </h1>

              <div className="wow fadeIn" data-wow-delay="0.3s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Your Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    
                    {error && (
                      <div className="col-12">
                        <div className="alert alert-danger mb-0">{error}</div>
                      </div>
                    )}

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? 'Logging in...' : 'Login'}
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <p className="mb-0">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-primary">
                          Register here
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;