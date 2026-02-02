// src/pages/admin/ProductsManagement.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const ProductsManagement = () => {
  const { api } = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState(''); // 'create' | 'edit' | 'view'
  const [currentProduct, setCurrentProduct] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    isActive: true,
    images: [], // will hold File objects during create/edit
    existingImages: [], // URLs from server during edit/view
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/products/admin/all');
      setProducts(response.data.products || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/api/categories/admin/all');
      setCategories(response.data);
    } catch (err) {
      console.warn('Categories fetch failed', err);
    }
  };

  const openModal = (mode, product = null) => {
    setModalMode(mode);
    if (product) {
      setCurrentProduct({
        ...product,
        price: product.price || '',
        stock: product.stock || '',
        category: product.category?._id || product.category || '',
        images: [], // new files to upload
        existingImages: product.images || [],
      });
      setPreviewImages(product.images || []);
    } else {
      setCurrentProduct({
        title: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        isActive: true,
        images: [],
        existingImages: [],
      });
      setPreviewImages([]);
    }
    setModalOpen(true);
    setError(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setCurrentProduct((prev) => ({ ...prev, images: files }));

    // Create previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (modalMode === 'view') return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('title', currentProduct.title);
      formData.append('description', currentProduct.description);
      formData.append('price', currentProduct.price);
      formData.append('stock', currentProduct.stock);
      formData.append('category', currentProduct.category);
      formData.append('isActive', currentProduct.isActive);

      // Append new images
      currentProduct.images.forEach((file) => {
        formData.append('images', file);
      });

      if (modalMode === 'create') {
        await api.post('/api/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        await api.put(`/api/products/${currentProduct._id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      setModalOpen(false);
      fetchProducts();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    
    try {
      await api.delete(`/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      alert(err.response?.data?.message || err.message || 'Error deleting product');
    }
  };

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-light text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Products Management</h6>
            <button className="btn btn-primary btn-sm" onClick={() => openModal('create')}>
              <i className="fa fa-plus me-2"></i>Add Product
            </button>
          </div>

          {loading && (
            <div className="text-center my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {error && <div className="alert alert-danger">{error}</div>}

          {!loading && (
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-dark">
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p._id}>
                      <td>
                        {p.images && p.images.length > 0 ? (
                          <img
                            src={p.images[0]}
                            alt={p.title}
                            style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                          />
                        ) : (
                          <div style={{ width: '60px', height: '60px', background: '#eee', borderRadius: '4px' }} />
                        )}
                      </td>
                      <td>{p.title}</td>
                      <td>₨ {p.price?.toLocaleString()}</td>
                      <td>{p.stock}</td>
                      <td>{p.category?.name || '-'}</td>
                      <td>
                        <span className={`badge ${p.isActive ? 'bg-success' : 'bg-danger'}`}>
                          {p.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-info me-1" onClick={() => openModal('view', p)}>
                          View
                        </button>
                        <button className="btn btn-sm btn-warning me-1" onClick={() => openModal('edit', p)}>
                          Edit
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ─── PRODUCT MODAL ──────────────────────────────────────────────── */}
      <div
        className={`modal fade ${modalOpen ? 'show' : ''}`}
        style={{ display: modalOpen ? 'block' : 'none' }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {modalMode === 'create'
                  ? 'Create New Product'
                  : modalMode === 'edit'
                  ? 'Edit Product'
                  : 'View Product'}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setModalOpen(false)}
              ></button>
            </div>

            <form onSubmit={handleSave}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label className="form-label">Product Title *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={currentProduct.title}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="5"
                        value={currentProduct.description}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Price (PKR) *</label>
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          value={currentProduct.price}
                          onChange={handleInputChange}
                          disabled={modalMode === 'view'}
                          required
                          min="1"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Stock Quantity *</label>
                        <input
                          type="number"
                          className="form-control"
                          name="stock"
                          value={currentProduct.stock}
                          onChange={handleInputChange}
                          disabled={modalMode === 'view'}
                          required
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Category *</label>
                      <select
                        className="form-select"
                        name="category"
                        value={currentProduct.category}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                        required
                      >
                        <option value="">-- Select Category --</option>
                        {categories.map((cat) => (
                          <option key={cat._id} value={cat._id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="isActive"
                        id="isActive"
                        checked={currentProduct.isActive}
                        onChange={handleInputChange}
                        disabled={modalMode === 'view'}
                      />
                      <label className="form-check-label" htmlFor="isActive">
                        Product is Active / Visible
                      </label>
                    </div>
                  </div>

                  {/* Right column - Images */}
                  <div className="col-md-4">
                    <label className="form-label">
                      {modalMode === 'view' ? 'Product Images' : 'Upload Images'}
                    </label>

                    {modalMode !== 'view' && (
                      <input
                        type="file"
                        className="form-control mb-3"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                      />
                    )}

                    <div className="image-preview-container d-flex flex-wrap gap-2">
                      {previewImages.length > 0 ? (
                        previewImages.map((src, idx) => (
                          <div key={idx} className="border rounded p-1">
                            <img
                              src={src}
                              alt="preview"
                              style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover',
                                borderRadius: '4px',
                              }}
                            />
                          </div>
                        ))
                      ) : (
                        <p className="text-muted">No images available</p>
                      )}
                    </div>
                  </div>
                </div>

                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>

                {modalMode !== 'view' && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Saving...
                      </>
                    ) : modalMode === 'create' ? (
                      'Create Product'
                    ) : (
                      'Update Product'
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {modalOpen && <div className="modal-backdrop fade show" />}
    </>
  );
};

export default ProductsManagement;