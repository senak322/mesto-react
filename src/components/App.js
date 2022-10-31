
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import popupChilds from './popupChilds.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js'


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isSelect, setIsSelect] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    api.getProfileInfo().then(res => {
      setCurrentUser(res)
    }).catch((err) => { console.log(err) });
  }, [])

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsSelect(false)
    setSelectedCard({});
  }
  

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsSelect(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function handleUpdateUser (data) {
    api.editInfo(data).then(res => {
      setCurrentUser(res)
    }).catch((err) => { console.log(err) });
    closeAllPopups()
  }



  return (

    <>

      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} child={popupChilds.avatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <PopupWithForm name={'add'} title={'Новое место'} buttonText={'Создать'} child={popupChilds.add} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
          <PopupWithForm name={'delete'} title={'Вы уверены?'} buttonText={'Да'} child={popupChilds.delete} isOpen={false} onClose={closeAllPopups} />

          <ImagePopup isSelect={isSelect} card={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>


    </>

  );
}

export default App;
