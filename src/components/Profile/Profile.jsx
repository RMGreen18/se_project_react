import "./Profile.css";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ onCardClick, onAddClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="sidebar">
        {" "}
        <SideBar />
      </section>
      <section className="clothes-section">
        {" "}
        <ClothesSection
          onCardClick={onCardClick}
          onAddClick={onAddClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}

export default Profile;
