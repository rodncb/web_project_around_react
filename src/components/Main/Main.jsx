import React from "react";
import imageAvatar from "../../images/Avatar.png";
import editButton from "../../images/editbutton.png";
import infoButton from "../../images/editButton.png";
import addButton from "../../images/AddButton.svg";
import trash from "../../images/Trash.png";
import heartIcon from "../../images/heart-icon.png";

function Main() {
  return (
    <main className="content">
      <div className="profile">
        <div className="profile__photo-container">
          <img
            src={imageAvatar}
            className="profile__photo"
            alt="Imagem do Perfil"
          />
          <button className="profile__photo-edit-button">
            <img
              src={editButton}
              alt="Imagem de um botão de edição da foto do perfil"
            />
          </button>
        </div>

        <div className="profile__info">
          <div className="profile__info-group">
            <h1 className="profile__info-title">Jacques Cousteau</h1>
            <button className="profile__info-edit-button">
              <img src={infoButton} alt="Imagem de um botão de edição" />
            </button>
          </div>

          <p className="profile__info-bio">Explorador</p>
        </div>
        <button className="profile__add-button">
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
            <img src="" alt="" className="card__image" />
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
    </main>
  );
}

export default Main;
