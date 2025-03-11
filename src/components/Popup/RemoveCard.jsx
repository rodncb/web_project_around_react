import { useContext } from "react";
import PropTypes from "prop-types";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function RemoveCard({ card }) {
  const { handleCardDelete, handleClosePopup } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleCardDelete(card);
    handleClosePopup();
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <button type="submit" className="popup__button">
        Sim
      </button>
    </form>
  );
}

RemoveCard.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
