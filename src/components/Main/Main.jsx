import React, { useState } from "react"; // <--- Import useState
import NewCard from "../Main/components/Popup/components/NewCard";
import EditProfile from "../Main/components/Popup/components/EditProfile";
import EditAvatar from "../Main/components/Popup/components/EditAvatar";
import Popup from "./components/Popup/Popup";
import imageAvatar from "../../images/Avatar.png";
import editButton from "../../images/VectorEditProfile.png";
import infoButton from "../../images/editButton.png";
import addButton from "../../images/AddButton.svg";
import ImagePopup from "./components/Popup/components/ImagePopup";
import Card from "./components/Popup/components/Card/Card";

function Main() {
  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707de",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  const [popup, setPopup] = useState(null);
  const [userName, setUserName] = useState("Jacques Cousteau");
  const [userBio, setUserBio] = useState("Explorador");
  const [selectedCard, setSelectedCard] = useState(null);
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
            src={imageAvatar}
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
            <h1 className="profile__info-title">Jacques Cousteau</h1>
            <button
              className="profile__info-edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img src={infoButton} alt="Imagem de um botão de edição" />
            </button>
          </div>

          <p className="profile__info-bio">Explorador</p>
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
          console.log(
            "setSelectedCard(null) foi chamado. selectedCard agora:",
            selectedCard
          );
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
