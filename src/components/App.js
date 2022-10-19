

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (

    <>
    <div className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="popup popup_type_edit">
        <div className="popup__content">
          <button type="button" className="popup__close" />
          <h3 className="popup__title">Редактировать профиль</h3>
          <form
            className="popup__form"
            action="#"
            name="edit-profile"
            noValidate=""
          >
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
            <button className="popup__save popup__save_type_edit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__content">
          <button type="button" className="popup__close popup__close_type_avatar" />
          <h3 className="popup__title popup__title_type_add">Новое&nbsp;место</h3>
          <form
            className="popup__form popup__form_type_add"
            action="#"
            name="add-cards"
            noValidate=""
          >
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
            <button className="popup__save popup__save_type_add" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__content popup__content_type_delete">
          <button type="button" className="popup__close popup__close_type_delete" />
          <h3 className="popup__title popup__title_type_delete">
            Вы&nbsp;уверены?
          </h3>
          <button className="popup__save popup__save_type_delete" type="button">
            Да
          </button>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__content popup__content_type_avatar">
          <button type="button" className="popup__close" />
          <h3 className="popup__title popup__title_type_avatar">
            Обновить&nbsp;аватар
          </h3>
          <form
            className="popup__form popup__form_type_avatar"
            action="#"
            name="edit-avatar"
            noValidate=""
          >
            <input
              className="popup__input popup__input_type_link"
              id="avatar"
              name="avatar"
              type="url"
              placeholder="Ссылка на фото"
              required=""
            />
            <span className="popup__error popup__error_type_active avatar-error" />
            <button className="popup__save popup__save_type_avatar" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_photo">
        <div className="popup__photo-container">
          <button type="button" className="popup__close popup__close_type_photo" />
          <img className="popup__image" src="#" alt="" />
          <p className="popup__place" />
        </div>
      </div>
      <template className="elements__template" />
      </div>
    </>


  );
}

export default App;
