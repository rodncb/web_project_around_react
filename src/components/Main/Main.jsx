import React, { useState } from "react"; // <--- Import useState
import NewCard from "../Main/components/Popup/components/NewCard";
import EditProfile from "../Main/components/Popup/components/EditProfile";
import EditAvatar from "../Main/components/Popup/components/EditAvatar";
import Popup from "./components/Popup/Popup";
import imageAvatar from "../../images/Avatar.png";
import editButton from "../../images/VectorEditProfile.png";
import infoButton from "../../images/editButton.png";
import addButton from "../../images/AddButton.svg";
import trash from "../../images/Trash.png";
import heartIcon from "../../images/heart-icon.png";

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
  console.log(cards);
  const [popup, setPopup] = useState(null);

  const [userName, setUserName] = useState("Jacques Cousteau");
  const [userBio, setUserBio] = useState("Explorador");
  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: (
      <EditProfile
        userName={userName} // ✅ Passe userName (valor atual do estado)
        userBio={userBio} // ✅ Passe userBio (valor atual do estado)
        setUserName={setUserName} // ✅ PASSE a função setUserName (para atualizar o estado)
        setUserBio={setUserBio} // ✅ PASSE a função setUserBio (para atualizar o estado)
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
              onClick={() => handleOpenPopup(editProfilePopup)} //
            >
              <img src={infoButton} alt="Imagem de um botão de edição" />
            </button>
          </div>

          <p className="profile__info-bio">Explorador</p>
        </div>
        <button
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)} //
        >
          <img
            src={addButton}
            className="profile__add-button-add"
            alt="Imagem de um botão de adição"
          />
        </button>
      </div>
      <div className="gallery">
        <template id="cardTemplate">
          <div className="card">
            <img alt="" className="card__image" />
            <div className="card__erase-container">
              <button className="card__erase">
                <img src={trash} alt="Imagem de lixeira para apagar card" />
              </button>
            </div>
            <div className="card__content">
              <span className="card__title"></span>
              <img
                src={heartIcon}
                alt="Ícone de coração para curtir card"
                className="card__icon"
              />
            </div>
          </div>
        </template>
      </div>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
