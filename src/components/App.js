
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import popupChilds from './popupChilds.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isSelect, setIsSelect] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const userContext = React.useContext(CurrentUserContext)

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getImages().then(res => {
      setCards(res)
    }).catch((err) => { console.log(err) })
  }, [])

  function handleCardLike(card) {
    
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === userContext._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    }).catch((err) => { console.log(err) });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(newCards => {
      setCards((cards) => cards.filter((el) => el._id !== card._id))
    }).catch((err) => { console.log(err) })
  }

  

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

  function handleUpdateUser(data) {
    api.editInfo(data).then(res => {
      setCurrentUser(res)
    }).catch((err) => { console.log(err) });
    closeAllPopups()
  }

  function handleUpdateAvatar(data) {
    api.setAvatar(data).then(res => {
      setCurrentUser(res)
    }).catch((err) => { console.log(err) });
    closeAllPopups()
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data).then(res => {
      setCards([res, ...cards]);
    }).catch((err) => { console.log(err) });
    closeAllPopups()
  }


  return (

    <>

      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
          <PopupWithForm name={'delete'} title={'Вы уверены?'} buttonText={'Да'} child={popupChilds.delete} isOpen={false} onClose={closeAllPopups} />

          <ImagePopup isSelect={isSelect} card={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>


    </>

  );
}

export default App;
