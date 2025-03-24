//React
import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";

//Styles
import "./App.css";

//Page Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";

//Contexts
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

//Utils
import { getWeather, processWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey, defaultClothingItems } from "../../utils/constants";

//NOTES
//create currentTemperatureUnit state
//pass "F" as initial value

//create context object
//create contexts folder
//create CurrentTemperatureContext.js

//get celcius value from API
// weather.temperature.F = data.main.temp;
// weather.temperature.C = Math.round((data.main.temp - 32) * 5/9);

//use context in:
//weathercard
//toggleswitch
//main

//add profile route
//create profile component
//install react router
//configure routes
//add navigation links to header

function App() {

  //Hooks
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState([])
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  //Handlers
  const handleCardClick = (card) => {
    setActiveModal("image-preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleToggleSwitchChange = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
  };

  const handleAddModalSubmit = ({ itemName, imageUrl, weatherType }) => {
    setClothingItems([{ name: itemName, link: imageUrl, weather: weatherType }, ...clothingItems]);
    closeActiveModal();
  }

  //Functions
  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const processedData = processWeatherData(data);
        setWeatherData(processedData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header onAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            ></Route>
            <Route path="/profile" element={<Profile onCardClick={handleCardClick} onAddClick={handleAddClick}/>}></Route>
          </Routes>
          <Footer />
        </div>
      </CurrentTempUnitContext.Provider>
     <AddItemModal 
     isOpen={activeModal === "add-garment"}
     onClose={closeActiveModal}
     onAddModalSubmit={handleAddModalSubmit}
     />
      <ItemModal
        name="image-preview"
        isOpen={activeModal === "image-preview"}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
