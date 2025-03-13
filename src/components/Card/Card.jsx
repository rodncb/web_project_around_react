import "../../blocks/gallery.css";
import trash from "../../images/Trash.png";
import heartIcon from "../../images/HeartIcon.png";
import PropTypes from "prop-types";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import RemoveCard from "../Popup/RemoveCard";

export default function Card(props) {
  const { handleCardLike, setPopup } = useContext(CurrentUserContext);

  if (!props.card) return null;

  const { name, link, isLiked = false } = props.card;
  const cardLikedButtonClassName = `card__icon ${
    isLiked ? "card__icon-liked" : ""
  }`;

  const handleDeleteClick = () => {
    setPopup({
      title: "Deletar card",
      children: <RemoveCard card={props.card} />,
    });
  };

  return (
    <div className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => props.onCardClick(props.card)}
      />
      <div className="card__erase-container">
        <button className="card__erase" onClick={handleDeleteClick}>
          <img src={trash} alt="Imagem de lixeira para apagar card" />
        </button>
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <img
          src={heartIcon}
          alt="Ícone de coração para curtir card"
          className={cardLikedButtonClassName}
          onClick={() => handleCardLike(props.card)}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    isLiked: PropTypes.bool,
    owner: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired, // Mantendo apenas uma vez
};
