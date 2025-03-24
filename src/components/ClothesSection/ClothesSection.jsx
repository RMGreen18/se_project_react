import "./ClothesSection.css";

import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ onCardClick, onAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__header-text">Your items</p>
        <button
          type="button"
          className="clothes-section__header-btn"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <div className="clothes-section__items">
        <ul className="clothes-section__list">
          {defaultClothingItems.map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
