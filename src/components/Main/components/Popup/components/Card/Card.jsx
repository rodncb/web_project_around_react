import React from "react";
import "../../../../../../blocks/gallery.css";
import trash from "../../../../../../images/Trash.png";
import heartIcon from "../../../../../../images/heart-icon.png";

export default function Card(props) {
  const { name, link } = props.card;
  return (
    <div className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => props.onCardClick(props.card)}
      />
      <div className="card__erase-container">
        <button className="card__erase">
          <img src={trash} alt="Imagem de lixeira para apagar card" />
        </button>
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <img
          src={heartIcon}
          alt="Ícone de coração para curtir card"
          className="card__icon"
        />
      </div>
    </div>
  );
}
