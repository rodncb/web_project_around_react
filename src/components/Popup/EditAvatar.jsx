export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="avatar-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_avatar-link"
          id="avatar-link"
          type="url"
          placeholder="Link da imagem"
          name="avatar-link"
          required
        />
        <span className="popup__error" id="avatar-link-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
