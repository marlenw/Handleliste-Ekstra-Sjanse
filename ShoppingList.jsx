import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onUpdateAmount, onToggleChecked, onDelete }) {
  return (
    <ul>
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onUpdateAmount={onUpdateAmount}
          onToggleChecked={onToggleChecked}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;