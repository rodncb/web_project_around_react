import { useState, useEffect, useContext } from "react";
import NewCard from "./Popup/NewCard";
import EditProfile from "./Popup/EditProfile";
import EditAvatar from "./Popup/EditAvatar";
import Popup from "../components/Popup/Popup";
// import imageAvatar from "../images/avatar.png";
import editButton from "../images/vectorEditProfile.png";
import infoButton from "../images/editButton.png";
import addButton from "../images/addButton.svg";
import ImagePopup from "./Popup/ImagePopup";
import Card from "./Card/Card";
import { api } from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main() {
  const currentUser = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const [userName, setUserName] = useState("Jacques Cousteau");
  const [userBio, setUserBio] = useState("Explorador");
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (!currentUser) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os dados.</div>;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: (
      <EditProfile
        userName={userName}
        userBio={userBio}
        setUserName={setUserName}
        setUserBio={setUserBio}
      />
    ),
  };
  const editAvatarPopup = {
    title: "Alterar foto do Perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popupToOpen) {
    setPopup(popupToOpen);
  }

  function handleClosePopup() {
    setPopup(null);
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
          <Card key={card._id} card={card} onCardClick={setSelectedCard} />
        ))}
      </div>
      <ImagePopup
        card={selectedCard}
        onClose={() => {
          setSelectedCard(null);
        }}
      />

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
