import { useContext, useRef } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar, handleClosePopup } =
    useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    handleClosePopup();
  }

  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_avatar-link"
          id="avatar-link"
          type="url"
          placeholder="Link da imagem"
          name="avatar-link"
          required
          ref={avatarRef}
        />
        <span className="popup__error" id="avatar-link-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
