import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({newItem, setNewItem, onItemFormSubmit}) {

 


  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" 
        value={newItem.name} 
        onChange={(e) => setNewItem({...newItem, name: e.target.value})} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setNewItem({...newItem, category: e.target.value})}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button 
      type="submit" 
      onClick={ (e) =>{
        e.preventDefault()
        onItemFormSubmit(newItem)
      }}>
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
