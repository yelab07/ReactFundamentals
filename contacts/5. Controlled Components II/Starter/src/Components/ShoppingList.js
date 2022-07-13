import React from "react";
import "../App.css";

function ShoppingList({ value, items, handleChange, addItem, deleteLastItem }) {
  const inputIsEmpty = () => value === "";

  const noItemsFound = () => items.length === 0;
  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
      <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default ShoppingList;
