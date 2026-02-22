// src/components/ManagementModal.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const ManagementModal = ({
    title,
    apiBase,
    fields,           // array of { name, label, type, options? }
    defaultItem,
    renderTableRow,
    extraModalContent = null,
}) => {
    const { api, isAuthenticated, isAdmin, user } = useAuth();
    const [items, setItems] = useState([]);
    const [modalMode, setModalMode] = useState(null); // 'create' | 'edit' | 'view'
    const [currentItem, setCurrentItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if user is authenticated and has admin privileges
        if (!isAuthenticated) {
            setError('You must be logged in to access this feature.');
            return;
        }
        
        if (!isAdmin()) {
            setError('You must be an admin to access this feature.');
            return;
        }

        fetchItems();
    }, [isAuthenticated, user]);

    const fetchItems = async () => {
        try {
            setLoading(true);
            setError(null);

            // Construct the URL based on apiBase following the backend route patterns
            let endpoint = `/api/${apiBase}`;

            // Admin endpoints follow different patterns based on the resource:
            // - products: /api/products/all (paginated)
            // - categories: /api/categories/all (paginated)
            // - faq: /api/faq (public) vs /api/faq/all (admin)
            // - contact: /api/contact (array)
            // - orders: /api/orders/all (paginated)
            // - users: /api/auth (array)
            
            if (apiBase !== 'auth') {
                if (apiBase === 'products' || apiBase === 'categories' || apiBase === 'orders') {
                    // These endpoints use /all and return paginated responses
                    endpoint += '/all';
                } else if (apiBase === 'faq') {
                    // For FAQ, use admin endpoint for management
                    endpoint += '/all';
                }
                // wishlist and cart don't have admin endpoints
            }

            const response = await api.get(endpoint);
            
            // Handle different response formats based on the API structure
            if (Array.isArray(response.data)) {
                setItems(response.data);
            } else if (response.data && Array.isArray(response.data.products)) {
                // Handle paginated response for products
                setItems(response.data.products);
            } else if (response.data && Array.isArray(response.data.categories)) {
                // Handle paginated response for categories
                setItems(response.data.categories);
            } else if (response.data && Array.isArray(response.data.orders)) {
                // Handle paginated response for orders
                setItems(response.data.orders);
            } else if (response.data && Array.isArray(response.data.users)) {
                // Handle array response for users
                setItems(response.data.users);
            } else if (response.data && Array.isArray(response.data.contacts)) {
                // Handle array response for contacts
                setItems(response.data.contacts);
            } else if (response.data && Array.isArray(response.data.faqs)) {
                // Handle array response for faqs
                setItems(response.data.faqs);
            } else {
                setItems([]);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            
            // Provide more specific error messages
            if (err.response?.status === 401) {
                setError('Authentication required. Please log in as an admin.');
                // Clear auth state if token is invalid
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            } else if (err.response?.status === 403) {
                setError('Access denied. You need admin privileges to access this feature.');
            } else if (err.response?.status === 404) {
                setError('API endpoint not found. Please check if the server is running.');
            } else if (err.response?.status === 500) {
                setError('Server error. Please check if the backend server is running and the database is connected.');
            } else {
                setError(err.response?.data?.message || err.message || 'Failed to fetch items');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (mode, item = null) => {
        setModalMode(mode);
        setCurrentItem(item ? { ...item } : { ...defaultItem });
        setShowModal(true);
        setError(null);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (modalMode === 'view') return;

        try {
            setLoading(true);
            setError(null);

            if (modalMode === 'create') {
                await api.post(`/api/${apiBase}`, currentItem);
            } else {
                await api.put(`/api/${apiBase}/${currentItem._id}`, currentItem);
            }

            setShowModal(false);
            await fetchItems();
        } catch (err) {
            console.error('Save error:', err);
            
            // Provide more specific error messages
            if (err.response?.status === 401) {
                setError('Authentication required. Please log in as an admin.');
                // Clear auth state if token is invalid
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            } else if (err.response?.status === 403) {
                setError('Access denied. You need admin privileges to perform this action.');
            } else if (err.response?.status === 500) {
                setError('Server error. Please check if the backend server is running and the database is connected.');
            } else {
                setError(err.response?.data?.message || err.message || 'Operation failed');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this item?')) return;

        try {
            setError(null);
            await api.delete(`/api/${apiBase}/${id}`);
            await fetchItems();
        } catch (err) {
            console.error('Delete error:', err);
            
            // Provide more specific error messages
            if (err.response?.status === 401) {
                alert('Authentication required. Please log in as an admin.');
                // Clear auth state if token is invalid
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            } else if (err.response?.status === 403) {
                alert('Access denied. You need admin privileges to perform this action.');
            } else if (err.response?.status === 500) {
                alert('Server error. Please check if the backend server is running and the database is connected.');
            } else {
                alert(err.response?.data?.message || err.message || 'Delete failed');
            }
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCurrentItem(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">{title}</h6>
                        <button className="btn btn-sm btn-primary" onClick={() => handleOpenModal('create')}>
                            <i className="fa fa-plus me-2"></i>Add New
                        </button>
                    </div>

                    {loading && (
                        <div className="text-center my-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error:</strong> {error}
                            <button type="button" className="btn-close" onClick={() => setError(null)}></button>
                        </div>
                    )}

                    {!loading && items.length === 0 && !error && (
                        <div className="alert alert-info">No items found. Click "Add New" to create one.</div>
                    )}

                    {!loading && items.length > 0 && (
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-dark">
                                        {fields.map(f => <th key={f.name}>{f.label}</th>)}
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => renderTableRow(item, handleOpenModal, handleDelete))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* MODAL */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {modalMode === 'create' ? `Create ${title.replace(' Management', '')}` :
                                    modalMode === 'edit' ? `Edit ${title.replace(' Management', '')}` :
                                        `View ${title.replace(' Management', '')}`}
                            </h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>

                        <form onSubmit={handleSave}>
                            <div className="modal-body">
                                {fields.map(field => (
                                    <div className="mb-3" key={field.name}>
                                        <label className="form-label">{field.label}</label>

                                        {field.type === 'text' && (
                                            <input
                                                type="text"
                                                className="form-control"
                                                name={field.name}
                                                value={currentItem?.[field.name] || ''}
                                                onChange={handleChange}
                                                disabled={modalMode === 'view'}
                                                required
                                            />
                                        )}

                                        {field.type === 'email' && (
                                            <input
                                                type="email"
                                                className="form-control"
                                                name={field.name}
                                                value={currentItem?.[field.name] || ''}
                                                onChange={handleChange}
                                                disabled={modalMode === 'view'}
                                                required
                                            />
                                        )}

                                        {field.type === 'number' && (
                                            <input
                                                type="number"
                                                className="form-control"
                                                name={field.name}
                                                value={currentItem?.[field.name] || ''}
                                                onChange={handleChange}
                                                disabled={modalMode === 'view'}
                                                required
                                            />
                                        )}

                                        {field.type === 'textarea' && (
                                            <textarea
                                                className="form-control"
                                                name={field.name}
                                                rows="4"
                                                value={currentItem?.[field.name] || ''}
                                                onChange={handleChange}
                                                disabled={modalMode === 'view'}
                                            />
                                        )}

                                        {field.type === 'select' && (
                                            <select
                                                className="form-select"
                                                name={field.name}
                                                value={currentItem?.[field.name] || ''}
                                                onChange={handleChange}
                                                disabled={modalMode === 'view'}
                                            >
                                                {field.options.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </select>
                                        )}

                                        {field.type === 'checkbox' && (
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name={field.name}
                                                    checked={currentItem?.[field.name] || false}
                                                    onChange={handleChange}
                                                    disabled={modalMode === 'view'}
                                                />
                                                <label className="form-check-label">{field.label}</label>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {extraModalContent && extraModalContent(currentItem, handleChange, modalMode)}

                                {error && (
                                    <div className="alert alert-danger mt-3" role="alert">
                                        {error}
                                    </div>
                                )}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                                {modalMode !== 'view' && (
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Saving...
                                            </>
                                        ) : (
                                            'Save'
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {showModal && <div className="modal-backdrop fade show"></div>}
        </>
    );
};

export default ManagementModal;