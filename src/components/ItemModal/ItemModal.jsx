import "./ItemModal.css";

function ItemModal({ name, isOpen, onClose, card }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""} modal_type_${name}`}>
      <div className="modal__content-image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-image"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__footer-title">{card.name}</h2>
          <p className="modal__footer-info">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
