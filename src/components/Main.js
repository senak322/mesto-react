import React from 'react';
import penFoto from '../pictures/penfoto.svg';
import { api } from '../utils/Api.js';
import Card from './Card.js';
import {CurrentUserContext } from '../contexts/CurrentUserContext.js'


function Main(props) {

  // const [userName, setUserName] = React.useState();
  // const [userDescription, setUserDescription] = React.useState();
  // const [userAvatar, setUserAvatar] = React.useState();
  // const [cards, setCards] = React.useState([]);

  const userContext = React.useContext(CurrentUserContext)


  // React.useEffect(() => {
  //   api.getImages().then(res => {
  //     setCards(res)
  //   }).catch((err) => { console.log(err) })
  // }, [])

//   function handleCardLike(card) {
//     // Снова проверяем, есть ли уже лайк на этой карточке
//     const isLiked = card.likes.some(i => i._id === userContext._id);
    
//     // Отправляем запрос в API и получаем обновлённые данные карточки
//     api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
//         setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
//     }).catch((err) => { console.log(err) });
// }

// function handleCardDelete (card) {
//   api.deleteCard(card._id).then(newCards => {
//     setCards((cards)=> cards.filter((el)=> el._id !== card._id))
//   }).catch((err) => { console.log(err) })
// }
  

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user-info">
          <div className="profile__wrapper">
            <img className="profile__foto" alt="фото профиля" src={userContext.avatar} />
            <div className="profile__foto profile__foto_type_overlay" onClick={props.onEditAvatar}>
              <img
                className="profile__pen"
                src={penFoto} 
              />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">{userContext.name}</h1>
              <button type="button" className="profile__edit" onClick={props.onEditProfile} />
            </div>
            <p className="profile__job">{userContext.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add" onClick={props.onAddPlace} />
      </section>
      <section className="elements">
        {props.cards.map(cardEl => (
          
          <Card card={cardEl} key={cardEl._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
        ))}
      </section>
    </main>
  )
}

export default Main;