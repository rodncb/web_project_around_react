import React, { useRef } from "react";
import "../../../../../blocks/popup.css"; // Importe o CSS do Popup (se ainda não estiver)

export default function EditProfile(props) {
  // ✅ Receba setUserName e setUserBio como props também:
  const { userName, userBio, setUserName, setUserBio } = props;

  const nameInputRef = useRef(null);
  const bioInputRef = useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();

    const nameValue = nameInputRef.current.value;
    const bioValue = bioInputRef.current.value;
  }

  // ✅ Crie a função handleNameChange:
  function handleNameChange(event) {
    console.log("handleNameChange foi chamada! Event:", event);

    setUserName(event.target.value);
    console.log(event.target.value);
  }

  function handleBioChange(event) {
    setUserBio(event.target.value);
  }

  return (
    <form
      className="form__popup" //
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
          value={userName}
          ref={nameInputRef}
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
          value={userBio}
          ref={bioInputRef}
          onChange={handleBioChange}
        />
        <span className="popup__input-error" id="profile-bio-error"></span>
      </label>
      <button type="submit" className="popup__button popup__button_disabled">
        Salvar
      </button>
    </form>
  );
}
