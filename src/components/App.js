
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import popupChilds from './popupChilds.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function handleAddPlaceClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }


  return (

    <>
      <div className="root">
        <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
          <Footer />
          <PopupWithForm name={'avatar'} title={'Обновить аватар'} child={popupChilds.avatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
          <PopupWithForm name={'edit'} title={'Редактировать профиль'} child={popupChilds.edit} isOpen={isEditProfilePopupOpen}onClose={closeAllPopups}/>
          <PopupWithForm name={'add'} title={'Новое место'} child={popupChilds.add} isOpen={isAddPlacePopupOpen}onClose={closeAllPopups}/>
          <PopupWithForm name={'delete'} title={'Вы уверены?'} child={popupChilds.delete} isOpen={false} onClose={closeAllPopups}/>
        </div>
        <template className="elements__template" />
      </div>
    </>

  );
}

export default App;
