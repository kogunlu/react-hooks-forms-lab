import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from 'uuid';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedName, setSelectedName] = useState("")
  const [newItem, setNewItem] = useState({id: uuid(), name: "", category: "Produce"})
  const [itemList, setItemList] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsAfterSearch = itemList.filter((item) => {
    if(selectedName === "") return true

    return item.name.toLowerCase().includes(selectedName) 
  })

  const itemsToDisplay = itemsAfterSearch.filter((item) => {
    if (selectedCategory === "All") return true;
   
    return item.category === selectedCategory;
  });

  function onItemFormSubmit(newItemWillBeAdded){
    itemsToDisplay.push(newItemWillBeAdded)
    console.log(newItem)
    console.log(itemsToDisplay)

    setItemList([...itemList, newItemWillBeAdded])
    
  } 

  return (
    <div className="ShoppingList">
      <ItemForm newItem = {newItem} setNewItem = {setNewItem} onItemFormSubmit = {onItemFormSubmit} />
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
