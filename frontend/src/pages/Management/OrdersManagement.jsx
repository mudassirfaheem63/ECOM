// src/pages/admin/OrdersManagement.jsx
import ManagementModal from "../../components/ManagementModal";
const OrdersManagement = () => {
  const fields = [
    { name: 'totalAmount', label: 'Total Amount', type: 'number' },
    {
      name: 'status', label: 'Status', type: 'select', options: [
        { value: 'pending', label: 'Pending' },
        { value: 'confirmed', label: 'Confirmed' },
        { value: 'shipped', label: 'Shipped' },
        { value: 'delivered', label: 'Delivered' },
        { value: 'cancelled', label: 'Cancelled' },
      ]
    },
    { name: 'paymentMethod', label: 'Payment Method', type: 'text' },
  ];

  const defaultItem = { totalAmount: 0, status: 'pending', paymentMethod: '' };

  const renderTableRow = (order, openModal) => (
    <tr key={order._id}>
      <td>{order._id}</td>
      <td>{order.user?.name || '—'}</td>
      <td>₨ {order.totalAmount?.toLocaleString()}</td>
      <td>
        <span className={`badge bg-${order.status === 'delivered' ? 'success' :
            order.status === 'cancelled' ? 'danger' :
              order.status === 'shipped' ? 'primary' :
                'warning'
          }`}>
          {order.status}
        </span>
      </td>
      <td>{order.paymentMethod}</td>
      <td>
        <button className="btn btn-sm btn-info me-1" onClick={() => openModal('view', order)}>
          View
        </button>
        <button className="btn btn-sm btn-warning me-1" onClick={() => openModal('edit', order)}>
          Edit Status
        </button>
      </td>
    </tr>
  );

  return (
    <ManagementModal
      title="Orders Management"
      apiBase="orders/admin"
      fields={fields}
      defaultItem={defaultItem}
      renderTableRow={renderTableRow}
    />
  );
};

export default OrdersManagement;