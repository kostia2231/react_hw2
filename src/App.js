import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";

function App() {
  const list = ["Milk", "Bread", "Butter"];
  const orders = [
    { orderId: 123, status: "On the way" },
    { orderId: 456, status: "Waiting for delivery" },
    { orderId: 789, status: "Delivered" },
  ];

  return (
    <div className="App">
      <Greeting name="Alice" />
      <ShoppingList list={list} />
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
