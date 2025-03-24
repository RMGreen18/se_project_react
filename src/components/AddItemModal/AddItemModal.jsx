import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { useState, useEffect } from "react";

function AddItemModal({ isOpen, onClose, onAddModalSubmit }) {
  //States
  const [itemName, setItemName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  //Handlers
  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddModalSubmit({ itemName, imageUrl, weatherType });
  };

  useEffect(() => {
    setItemName("");
    setImageUrl("");
    setWeatherType("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      btnText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
          value={itemName}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          onChange={handleUrlChange}
          value={imageUrl}
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
            value="hot"
            onChange={handleWeatherChange}
            checked={weatherType === "hot"}
          />
          {""} Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            value="warm"
            onChange={handleWeatherChange}
            checked={weatherType === "warm"}
          />
          {""}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weatherType"
            className="modal__radio-input"
            value="cold"
            onChange={handleWeatherChange}
            checked={weatherType === "cold"}
          />
          {""}
          Cold
        </label>
      </label>
    </ModalWithForm>
  );
}

export default AddItemModal;
