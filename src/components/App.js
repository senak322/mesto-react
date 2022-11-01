
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
// import PopupWithForm from './PopupWithForm.js';
// import popupChilds from './popupChilds.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeletePopup from './DeletePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [deletedCard, setDeletedCard] = React.useState({})
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isSelect, setIsSelect] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getImages().then(res => {
      setCards(res)
    }).catch((err) => { console.log(err) })
  }, [])

  function handleCardLike(card) {
    
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    }).catch((err) => { console.log(err) });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(newCards => {
      setCards((cards) => cards.filter((el) => el._id !== card._id))
    }).catch((err) => { console.log(err) }).finally(closeAllPopups())
    
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
    setIsDeletePopupOpen(false);
    setDeletedCard({})
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

  function handleDeleteClick(card) {
    setIsDeletePopupOpen(!isDeletePopupOpen);
    setDeletedCard(card);
  }


  return (

    <>

      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleDeleteClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
          <DeletePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} onDelete={handleCardDelete} card={deletedCard} />

          <ImagePopup isSelect={isSelect} card={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>


    </>

  );
}

export default App;
