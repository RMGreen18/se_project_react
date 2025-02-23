import "./ModalWithForm.css";

function ModalWithForm({ children, title, btnText, name, activeModal, onClose }) {
  return (
    <div
      className={`modal ${
        activeModal === "add-garment" ? "modal__opened" : ""
      } modal_type_${name}`}
    >
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close-form"></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" name={`${name}`}>
          {children}
          <button type="button" className="modal__submit">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
