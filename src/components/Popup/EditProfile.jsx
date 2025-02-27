import { useRef } from "react";
import "../../blocks/popup.css";

export default function EditProfile(props) {
  const { userName, userBio, setUserName, setUserBio } = props;

  const nameInputRef = useRef(null);
  const bioInputRef = useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleNameChange(event) {
    setUserName(event.target.value);
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
import PropTypes from "prop-types";

EditProfile.propTypes = {
  userName: PropTypes.string.isRequired,
  userBio: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  setUserBio: PropTypes.func.isRequired,
};
