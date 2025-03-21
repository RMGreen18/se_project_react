import "./ClothesSection.css";

import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection() {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__header-text">Your items</p>
        <button className="clothes-section__header-button">+ Add new</button>
      </div>
      <div className="clothes-section__items">
        <ul className="items__list">
          {defaultClothingItems
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
