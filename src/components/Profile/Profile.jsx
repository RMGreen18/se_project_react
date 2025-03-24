import "./Profile.css";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import AddItemModal from "../AddItemModal/AddItemModal";

function Profile({ onCardClick, onAddClick }) {
  return (
    <div className="profile">
      <section className="sidebar">
        {" "}
        <SideBar />
      </section>
      <section className="clothes-section">
        {" "}
        <ClothesSection onCardClick={onCardClick} onAddClick={onAddClick}/>
      </section>
    </div>
  );
}

export default Profile;
