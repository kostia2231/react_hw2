function ShoppingList({ list }) {
  if (list.length === 0) {
    return <p>Nothing</p>;
  }
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default ShoppingList;
