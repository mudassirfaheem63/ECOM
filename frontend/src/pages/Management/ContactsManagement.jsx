// src/pages/admin/ContactManagement.jsx
import ManagementModal from "../../components/ManagementModal";

const ContactsManagement = () => {
  const fields = [
    { name: 'name',    label: 'Name',    type: 'text' },
    { name: 'email',   label: 'Email',   type: 'email' },
    { name: 'message', label: 'Message', type: 'textarea' },
    { name: 'isResolved', label: 'Resolved', type: 'checkbox' },
  ];

  const defaultItem = { name: '', email: '', message: '', isResolved: false };

  const renderTableRow = (contact, openModal, handleDelete) => (
    <tr key={contact._id}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.message?.substring(0, 80)}{contact.message?.length > 80 ? '...' : ''}</td>
      <td>
        <span className={`badge ${contact.isResolved ? 'bg-success' : 'bg-warning'}`}>
          {contact.isResolved ? 'Resolved' : 'Pending'}
        </span>
      </td>
      <td>
        <button className="btn btn-sm btn-info me-1" onClick={() => openModal('view', contact)}>
          View
        </button>
        <button className="btn btn-sm btn-warning me-1" onClick={() => openModal('edit', contact)}>
          Edit
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(contact._id)}>
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <ManagementModal
      title="Contact Us Management"
      apiBase="contact"
      fields={fields}
      defaultItem={defaultItem}
      renderTableRow={renderTableRow}
    />
  );
};

export default ContactsManagement;