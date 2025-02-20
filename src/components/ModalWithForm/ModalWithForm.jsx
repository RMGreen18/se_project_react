import "./ModalWithForm.css";

function ModalWithForm({ children, title, btnText, name, activeModal }) {
  return (
    <div className={`modal ${activeModal && "modal__opened"}modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" className="modal__close"></button>
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
