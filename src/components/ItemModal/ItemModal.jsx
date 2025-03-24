import "./ItemModal.css";

function ItemModal({ name, isOpen, onDeleteClick, onClose, card }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""} modal_type_${name}`}>
      <div className="modal__content-image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-image"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-info">
            <h2 className="modal__footer-title">{card.name}</h2>
            <p className="modal__footer-caption">Weather: {card.weather}</p>
          </div>
          <button
            onClick={onDeleteClick}
            className="modal__footer-delete-btn"
            type="button"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
