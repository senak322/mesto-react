const popupChilds = {
  edit: (
    <>
      <input
        className="popup__input popup__input_type_name"
        id="name"
        name="name"
        type="text"
        placeholder="Введите имя"
        required=""
        minLength={2}
        maxLength={40}
      />
      <span className="popup__error name-error" />
      <input
        className="popup__input popup__input_type_job"
        id="job"
        name="job"
        type="text"
        placeholder="Укажите профессию"
        required=""
        minLength={2}
        maxLength={200}
      />
      <span className="popup__error job-error" />
      
    </>
  )
  ,
  add: (
    <>
      <input
        className="popup__input popup__input_type_place"
        id="place"
        name="place"
        type="text"
        placeholder="Название"
        required=""
        minLength={2}
        maxLength={30}
      />
      <span className="popup__error place-error" />
      <input
        className="popup__input popup__input_type_link"
        id="link"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        required=""
      />
      <span className="popup__error popup__error_type_active link-error" />

    </>)
  ,
  delete: (
    <button className="popup__save popup__save_type_delete" type="button">
      Да
    </button>)
  ,
  avatar: (
    <>
      <input
        className="popup__input popup__input_type_link"
        id="avatar"
        name="avatar"
        type="url"
        placeholder="Ссылка на фото"
        required=""
      />
      <span className="popup__error popup__error_type_active avatar-error" />

    </>)

}

export default popupChilds;