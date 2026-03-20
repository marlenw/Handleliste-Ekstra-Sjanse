import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";
import "./Style.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Melk", amount: 1, checked: true },
    { id: 2, name: "Brød", amount: 2, checked: false }
  ]);

  function updateAmount(id, newAmount) {
    const value = Number(newAmount);
    if (value < 1) return;
    setItems(prevItems =>
      prevItems.map(item => item.id === id ? { ...item, amount: value } : item)
    );
  }

  function toggleChecked(id) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function addItem(newItem) {
    setItems(prevItems => [{ ...newItem, id: Date.now(), checked: false }, ...prevItems]);
  }

  function deleteItem(id) {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  return (
  <main className="container">
    <h1>Handleliste</h1>
    <AddForm onAddItem={addItem} />
    <ShoppingList 
      items={items} 
      onUpdateAmount={updateAmount} 
      onToggleChecked={toggleChecked} 
      onDelete={deleteItem}
    />
  </main>
);
}

export default App;