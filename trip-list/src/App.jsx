import { useState } from "react";

/* eslint-disable react/prop-types */
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Cash", quantity: 5000, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(itemId) {
    setItems(items.filter((item) => item.id != itemId));
  }

  function handlePackedItem(itemId) {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleRemoveItem}
        onPackedItem={handlePackedItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌳 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    onAddItems(newItem);
    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      What do you need for your trip?
      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Item..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></input>
      <button>Add Item</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onPackedItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onPackedItem }) {
  return (
    <li key={Date.now()}>
      <input
        type="checkbox"
        value={item.packed}
        checked={item.packed ? true : false}
        onChange={() => onPackedItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const numItems = items.length ? items.length : 0;
  const numPacked = items.filter((item) => item.packed).length;
  const perPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {perPacked == 100
          ? "Congratulation! Your beg is fully packed. Lets go......."
          : numItems == 0
          ? "Start adding some items."
          : `You have ${numItems} items on your list, and you allready packed ${numPacked} (${perPacked} %)`}
      </em>
    </footer>
  );
}
