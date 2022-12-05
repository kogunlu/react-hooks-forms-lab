import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from 'uuid';

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedName, setSelectedName] = useState("")
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsAfterSearch = items.filter((item) => {
    if(selectedName === "") return true

    return item.name.toLowerCase().includes(selectedName) 
  })

  const itemsToDisplay = itemsAfterSearch.filter((item) => {
    if (selectedCategory === "All") return true;
   
    return item.category === selectedCategory;
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {setSelectedName} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
      <p>SelectedName: {selectedName}</p>
    </div>
  );
}

export default ShoppingList;
