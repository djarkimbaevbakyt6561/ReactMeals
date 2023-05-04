import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import Header from "./components/header/Header";
import MealSummary from "./components/meal-summary/MealSummary";
import Meals from "./components/meals/Meals";
import Modal from "./components/modal/Modal";
function App() {
  const [openModalState, setOpenModalState] = useState(false)
  function toggleModalHandler() {
    setOpenModalState((prev) => !prev)
  }
  const meals = [
    {
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      id: 1
    },
    {
      title: "Schnitzel",
      description: "A german specialty!",
      price: 16,
      id: 2
    },
    {
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      id: 3
    },
    {
      title: "Green Bowl",
      description: "Healthy...and green...",
      price: 19.99,
      id: 4
    },
  ]
  return (
    <div className="App">
      <Header onClick={toggleModalHandler}  />
      <MealSummary></MealSummary>
      <Meals meals={meals}></Meals>
      {openModalState && createPortal(
        <Modal onClick={toggleModalHandler} />,
        document.getElementById('modal')
      )}
    </div>
  );
}

export default App;