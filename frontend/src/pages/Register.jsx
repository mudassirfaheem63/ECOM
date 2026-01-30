import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import HeroHeader from '../components/HeroHeader';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const { register, loading } = useAuth();
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
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return;
    }

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    const result = await register(
      formData.name,
      formData.email,
      formData.password,
      formData.phone,
      formData.address
    );

    if (result.success) {
      // User is now automatically logged in, navigate to home
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <HeroHeader title="Register" />

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="text-primary mb-4 text-center">
                <span className="fw-light text-dark">Create Your</span> Account
              </h1>

              <div className="wow fadeIn" data-wow-delay="0.3s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                        <label htmlFor="name">Full Name *</label>
                      </div>
                    </div>
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
                        <label htmlFor="email">Email Address *</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={loading}
                        />
                        <label htmlFor="phone">Phone Number (Optional)</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Your Address"
                          value={formData.address}
                          onChange={handleChange}
                          disabled={loading}
                        />
                        <label htmlFor="address">Address (Optional)</label>
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
                          minLength={6}
                        />
                        <label htmlFor="password">Password * (min 6 characters)</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          disabled={loading}
                        />
                        <label htmlFor="confirmPassword">Confirm Password *</label>
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
                        {loading ? 'Creating Account...' : 'Register'}
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <p className="mb-0">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary">
                          Login here
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

export default Register;