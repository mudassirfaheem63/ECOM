// src/components/ManagementModal.jsx
import React, { useState, useEffect } from 'react';

// Get backend URL from environment variable
const API_BASE = import.meta.env.VITE_Backend || 'http://localhost:5000';

const ManagementModal = ({
    title,
    apiBase,
    fields,           // array of { name, label, type, options? }
    defaultItem,
    renderTableRow,
    extraModalContent = null,
}) => {
    const [items, setItems] = useState([]);
    const [modalMode, setModalMode] = useState(null); // 'create' | 'edit' | 'view'
    const [currentItem, setCurrentItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            setLoading(true);
            setError(null);

            // Construct the URL based on apiBase
            let url = `${API_BASE}/api/${apiBase}`;

            // Add /admin/all for endpoints that have it, except 'auth'
            if (apiBase !== 'auth') {
                url += '/admin/all';
            }

            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('Authentication required. Please login again.');
            }

            const res = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                const contentType = res.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await res.json();
                    throw new Error(errorData.message || `Failed to fetch: ${res.status}`);
                } else {
                    // This is the HTML error page
                    throw new Error(`Server error: ${res.status}. Backend may not be running at ${API_BASE}`);
                }
            }

            const data = await res.json();
            setItems(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err.message);
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

            const method = modalMode === 'create' ? 'POST' : 'PUT';
            const url = modalMode === 'create'
                ? `${API_BASE}/api/${apiBase}`
                : `${API_BASE}/api/${apiBase}/${currentItem._id}`;

            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('Authentication required. Please login again.');
            }

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(currentItem)
            });

            if (!res.ok) {
                const contentType = res.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errData = await res.json();
                    throw new Error(errData.message || 'Operation failed');
                } else {
                    throw new Error(`Server error: ${res.status}`);
                }
            }

            setShowModal(false);
            await fetchItems();
        } catch (err) {
            console.error('Save error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this item?')) return;

        try {
            setError(null);
            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error('Authentication required. Please login again.');
            }

            const res = await fetch(`${API_BASE}/api/${apiBase}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                const contentType = res.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errData = await res.json();
                    throw new Error(errData.message || 'Delete failed');
                } else {
                    throw new Error(`Server error: ${res.status}`);
                }
            }

            await fetchItems();
        } catch (err) {
            console.error('Delete error:', err);
            alert('Delete failed: ' + err.message);
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