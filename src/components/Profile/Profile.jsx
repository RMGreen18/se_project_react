import "./Profile.css";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile() {
  return (
    <div className="profile">
      <section className="sidebar">
        {" "}
        <SideBar />
      </section>
      <section className="clothes-section">
        {" "}
        <ClothesSection />
      </section>
    </div>
  );
}

export default Profile;
