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
import ItemModal from "../ItemModal/ItemModal";

//Contexts
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

//Utils
import { getWeather, processWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";

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
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                />
              }
            ></Route>
            <Route path="/profile" element={<Profile onCardClick={handleCardClick} />}></Route>
          </Routes>
          <Footer />
        </div>
      </CurrentTempUnitContext.Provider>
      <ModalWithForm
        title="New garment"
        name="add-garment"
        btnText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <label className="modal__label ">
          <legend className="modal__legend">Set weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              name="weatherType"
              className="modal__radio-input"
            />
            {""} Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              type="radio"
              name="weatherType"
              className="modal__radio-input"
            />
            {""}
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              type="radio"
              name="weatherType"
              className="modal__radio-input"
            />
            {""}
            Cold
          </label>
        </label>
      </ModalWithForm>
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
