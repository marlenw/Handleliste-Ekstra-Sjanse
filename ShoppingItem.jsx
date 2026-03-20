function ShoppingItem({ item, onUpdateAmount, onToggleChecked, onDelete }) {
  return (
    <li className={item.checked ? "checked" : ""}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleChecked(item.id)}
      />
      {item.name}
      <input
        type="number"
        value={item.amount}
        onChange={(e) => onUpdateAmount(item.id, e.target.value)}
        min="1"
      />
      stk
      <button onClick={() => onDelete(item.id)}>Slett</button>
    </li>
  );
}

export default ShoppingItem;