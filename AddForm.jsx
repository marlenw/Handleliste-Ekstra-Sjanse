import { useState } from "react";

function AddForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !amount) {
      alert("Fyll inn både varenavn og antall!");
      return;
    }

    onAddItem({
      name,
      amount: Number(amount),
      checked: false
    });

    setName("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Varenavn"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Antall"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        min="1"
      />
      <button type="submit">Legg til</button>
    </form>
  );
}

export default AddForm;