// src/pages/admin/UsersManagement.jsx
import ManagementModal from "../../components/ManagementModal";

const UsersManagement = () => {
  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'role', label: 'Role', type: 'select', options: [
      { value: 'user', label: 'User' },
      { value: 'admin', label: 'Admin' }
    ]},
    { name: 'phone', label: 'Phone', type: 'text' },
    { name: 'isBlocked', label: 'Blocked', type: 'checkbox' },
  ];

  const defaultItem = { name: '', email: '', role: 'user', phone: '', isBlocked: false };

  const renderTableRow = (user, openModal, deleteItem) => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <button className="btn btn-sm btn-info me-1" onClick={() => openModal('view', user)}>View</button>
        <button className="btn btn-sm btn-warning me-1" onClick={() => openModal('edit', user)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={() => deleteItem(user._id)}>Delete</button>
      </td>
    </tr>
  );

  return (
    <ManagementModal
      title="Users Management"
      apiBase="auth"
      fields={fields}
      defaultItem={defaultItem}
      renderTableRow={renderTableRow}
    />
  );
};

export default UsersManagement;