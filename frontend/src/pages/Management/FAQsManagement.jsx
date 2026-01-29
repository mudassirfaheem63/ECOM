// src/pages/admin/FAQManagement.jsx
import ManagementModal from "../../components/ManagementModal";

const FAQManagement = () => {
  const fields = [
    { name: 'question', label: 'Question', type: 'text' },
    { name: 'answer',   label: 'Answer',   type: 'textarea' },
    { name: 'isActive', label: 'Active',   type: 'checkbox' },
  ];

  const defaultItem = { question: '', answer: '', isActive: true };

  const renderTableRow = (faq, openModal, handleDelete) => (
    <tr key={faq._id}>
      <td>{faq.question}</td>
      <td>{faq.answer?.substring(0, 80)}{faq.answer?.length > 80 ? '...' : ''}</td>
      <td>
        <span className={`badge ${faq.isActive ? 'bg-success' : 'bg-danger'}`}>
          {faq.isActive ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td>
        <button className="btn btn-sm btn-info me-1" onClick={() => openModal('view', faq)}>
          View
        </button>
        <button className="btn btn-sm btn-warning me-1" onClick={() => openModal('edit', faq)}>
          Edit
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(faq._id)}>
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <ManagementModal
      title="FAQ Management"
      apiBase="faq"
      fields={fields}
      defaultItem={defaultItem}
      renderTableRow={renderTableRow}
    />
  );
};

export default FAQManagement;