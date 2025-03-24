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
import {
  coordinates,
  apiKey,
} from "../../utils/constants";

//API
import Api from "../../utils/api";


//use context in:
//weathercard
//toggleswitch
//main

function App() {

  const clothingApi = new Api();

  //Hooks
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState([]);
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
    const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    clothingApi.addItem({ itemName, imageUrl, weatherType}).then((addedItem) => {
      setClothingItems([addedItem, ...clothingItems])
      closeActiveModal();
    }).catch(console.error);
  };

  //Functions
  const closeActiveModal = () => {
    setActiveModal("");
  };

//Setting weather data
  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const processedData = processWeatherData(data);
        setWeatherData(processedData);
      })
      .catch(console.error);
  }, []);


  //Setting clothing items
  useEffect(() => {
    clothingApi.getItems()
      .then((data) => {
        setClothingItems(data);
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
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  onAddClick={handleAddClick}
                />
              }
            ></Route>
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
