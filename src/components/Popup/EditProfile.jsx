import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "../../blocks/popup.css";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateUser({
      name,
      about: description,
    });
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  return (
    <form
      className="form__popup"
      name="profile-form"
      id="profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input form-input"
          id="profile-name"
          type="text"
          placeholder="Nome"
          name="name"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__input-error" id="profile-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input form-input"
          id="profile-bio"
          type="text"
          placeholder="Sobre mim"
          name="about-me"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__input-error" id="profile-bio-error"></span>
      </label>
      <button type="submit" className="popup__button">
        Salvar
      </button>
    </form>
  );
}
