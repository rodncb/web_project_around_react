import "../../blocks/popup.css";
import PropTypes from "prop-types";

export default function Popup(props) {
  const { onClose, title, children, isOpen } = props;

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          aria-label="Close modal"
          type="button"
          onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>} {children}
      </div>
    </div>
  );
}

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};
