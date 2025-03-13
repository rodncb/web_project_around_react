import { useState, useContext } from "react";
import PropTypes from "prop-types";
import NewCard from "./Popup/NewCard";
import EditProfile from "./Popup/EditProfile";
import EditAvatar from "./Popup/EditAvatar";
import Popup from "../components/Popup/Popup";
import editButton from "../images/VectorEditProfile.png";
import infoButton from "../images/EditButton.png";
import addButton from "../images/AddButton.svg";
import ImagePopup from "./Popup/ImagePopup";
import Card from "./Card/Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ cards }) {
  const {
    currentUser,
    handleClosePopup,
    popup,
    setPopup,
    handleCardLike,
    handleCardDelete,
  } = useContext(CurrentUserContext);

  const [selectedCard, setSelectedCard] = useState(null);

  if (!currentUser) {
    return <div>Carregando...</div>;
  }

  const newCardPopup = {
    title: "Novo Local",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Alterar foto do Perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popupToOpen) {
    setPopup(popupToOpen);
  }

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__photo-container">
          <img
            src={currentUser.avatar}
            className="profile__photo"
            alt="Imagem do Perfil"
          />
          <button
            className="profile__photo-edit-button"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img
              src={editButton}
              alt="Imagem de um botão de edição da foto do perfil"
            />
          </button>
        </div>

        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__info-title">{currentUser.name}</h1>
            <button
              className="profile__info-edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img src={infoButton} alt="Imagem de um botão de edição" />
            </button>
          </div>

          <p className="profile__info-bio">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            src={addButton}
            className="profile__add-button-add"
            alt="Imagem de um botão de adição"
          />
        </button>
      </div>

      <div className="gallery">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </div>
      <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title} isOpen={!!popup}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

Main.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      likes: PropTypes.array.isRequired,
      owner: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default Main;
