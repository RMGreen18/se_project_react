import "./DeleteConfirmModal.css";

function DeleteConfirmModal({ name, isOpen, onClose, onDelete }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""} modal_type_${name}`}>
      <div className="modal__delete-content">
        <button onClick={onClose} type="button" className="modal__close-form" />
        <form
          onSubmit={handleSubmit}
          name={`${name}`}
          className="modal__delete-form"
        >
          <h2 className="modal__delete-prompt">
            Are you sure you want to delete this item? This action is
            irreversible.
          </h2>
          <button className="modal__delete-confirm-btn" type="submit">
            Yes, delete item
          </button>
          <button
            onClick={onClose}
            className="modal__delete-cancel-btn"
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
