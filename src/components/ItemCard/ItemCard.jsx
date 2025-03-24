import "./ItemCard.css";
function ItemCard({ id, item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <div className="item__container">
      <h2 className="item__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="item__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </div>
  );
}

export default ItemCard;
