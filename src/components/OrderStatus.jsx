function OrderStatus({ orderId, status }) {
  return (
    <p>
      Order: {orderId}. Status: {status}.
    </p>
  );
}

export default OrderStatus;
