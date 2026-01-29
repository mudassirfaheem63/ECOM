// src/pages/admin/CategoriesManagement.jsx
import ManagementModal from "../../components/ManagementModal";

const CategoriesManagement = () => {
  const fields = [
    { name: 'name',     label: 'Category Name', type: 'text' },
    { name: 'slug',     label: 'Slug',          type: 'text' },
    { name: 'isActive', label: 'Active',        type: 'checkbox' },
  ];

  const defaultItem = { name: '', slug: '', isActive: true };

  const renderTableRow = (category, openModal, handleDelete) => (
    <tr key={category._id}>
      <td>{category.name}</td>
      <td>{category.slug}</td>
      <td>
        <span className={`badge ${category.isActive ? 'bg-success' : 'bg-danger'}`}>
          {category.isActive ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td>
        <button className="btn btn-sm btn-info me-1" onClick={() => openModal('view', category)}>
          View
        </button>
        <button className="btn btn-sm btn-warning me-1" onClick={() => openModal('edit', category)}>
          Edit
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(category._id)}>
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <ManagementModal
      title="Categories Management"
      apiBase="categories"
      fields={fields}
      defaultItem={defaultItem}
      renderTableRow={renderTableRow}
    />
  );
};

export default CategoriesManagement;