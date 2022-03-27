import { useState } from "react";

export default function useItem() {
  const getItems = () => {
    const itemsString = localStorage.getItem("items");
    if (itemsString !== "undefined") {
      return JSON.parse(itemsString);
    }
    return null;
  };
  const [items, setItems] = useState(getItems());

  const saveItems = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
    setItems(items);
  };

  return {
    setItems: saveItems,
    items,
  };
}
