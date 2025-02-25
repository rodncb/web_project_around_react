import React from "react";
import "../../../../../blocks/popupimage.css";
import "../../../../../blocks/popup.css";

export default function ImagePopup(props) {
  const { onClose, card } = props;

  return (
    <div className={`popup-image ${card ? "popup__opened" : ""}`}>
      <div className="popup__container-image">
        <button
          aria-label="Close modal"
          className="popup__close-button popup__close-button-image"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup-image-content"
          src={card?.link}
          alt={card?.name}
        />
        <h2 className="popup__caption">{card?.name}</h2>{" "}
      </div>
    </div>
  );
}
