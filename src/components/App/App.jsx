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
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";

//Contexts
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

//Utils
import { getWeather, processWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey, clothingApi } from "../../utils/constants";

function App() {
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
    console.log("Slected card is:", card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteClick = () => {
    setActiveModal("delete-confirm");
  };

  const handleToggleSwitchChange = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
  };

  const handleAddModalSubmit = ({ itemName, imageUrl, weatherType }) => {
    clothingApi
      .addItem({ itemName, imageUrl, weatherType })
      .then((addedItem) => {
        setClothingItems([addedItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteModalSubmit = () => {
    console.log("modal received card:", selectedCard);
    console.log("delete confirm submitted");
    console.log("Selected card id:", selectedCard._id, typeof selectedCard._id);
    console.log(
      "All items:",
      clothingItems[0]._id,
      typeof clothingItems[0]._id
    );
    closeActiveModal();
    clothingApi
      .removeItem(selectedCard)
      .then((res) => {
        const filteredItems = clothingItems.filter((item) => {
          console.log(item._id);
          return item._id !== selectedCard._id;
        });
        return filteredItems;
      })
      .then((data) => {
        setClothingItems(data);
        closeActiveModal();
      })
      .catch(console.error);
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
    clothingApi
      .getItems()
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
                  clothingItems={clothingItems}
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
        onDeleteClick={handleDeleteClick}
        onClose={closeActiveModal}
      />
      <DeleteConfirmModal
        name="delete-confirm"
        isOpen={activeModal === "delete-confirm"}
        onClose={closeActiveModal}
        onDelete={handleDeleteModalSubmit}
      />
    </div>
  );
}

export default App;
