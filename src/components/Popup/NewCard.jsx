import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function NewCard() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const { handleAddPlaceSubmit, handleClosePopup } =
    useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (name && link) {
      console.log("Enviando dados:", { name, link }); // Debug
      handleAddPlaceSubmit({
        name: name,
        link: link,
      });

      setName("");
      setLink("");
      handleClosePopup();
    }
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="popup__button" type="submit" disabled={!name || !link}>
        Salvar
      </button>
    </form>
  );
}
