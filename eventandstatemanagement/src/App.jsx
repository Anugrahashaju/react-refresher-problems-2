import "./App.css";
import { CharacterCount } from "./componets/CharacterCounter";
import { FilterableList } from "./componets/FilterableList";
import { FormValidation } from "./componets/FormValidation";
import { SimpleCounter } from "./componets/SimpleCounter";
import { TextInputMirror } from "./componets/TextInputMirror";
import { ThemeToggle } from "./componets/ThemeToggle";
import { TodoList } from "./componets/TodoList";

function App() {

  const imagesUrl = [
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/300"   
  ]
      
  

  return(

    <>
    <h3 style={{color:'red'}}>**Problem 1: Simple Counter (B)**</h3>
    <SimpleCounter/>
    <h3 style={{color:'red'}}>**Problem 2: Text Input Mirror (B)**</h3>
    <TextInputMirror/>
    <h3 style={{color:'red'}}>**Problem 3: Toggle Dark Mode (B)**</h3>
    <ThemeToggle/>
    <h3 style={{color:'red'}}>**Problem 4: Dynamic List Filtering (I)**</h3>
    <FilterableList/>
    <h3 style={{color:'red'}}>**Problem 5: Form Validation - Email and Password (I)**</h3>
    <FormValidation/>
    <h3 style={{color:'red'}}>**Problem 6: Character Count with Limit (I)**</h3>
    <CharacterCount/>
    <h3 style={{color:'red'}}>**Problem 7: Simple To-Do List (I)**</h3>
    <TodoList/>
    <h3 style={{color:'red'}}>**Problem 8: Image Gallery with Active Image (I)**</h3>
    

 
  </>
  );
  
}

export default App;
