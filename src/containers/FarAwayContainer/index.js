import React, { useState } from "react";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import PackingList from "../../components/PackingList";
import Stats from "../../components/Stats";
import "./FarAwayContainer.scss";

const FarAwayContainer = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }
  function handleUpdateItem(updatedItem) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item
      )
    );
  }
  function handleToggleItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all item?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="faraway-app">
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onUpdateItem={handleUpdateItem}
          onToggleItem={handleToggleItem}
          onClearItems={handleClearItems}
        />
        <Stats items={items} />
      </div>
    </div>
  );
};

export default FarAwayContainer;
