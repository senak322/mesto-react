import React from 'react';
import penFoto from '../pictures/penfoto.svg';
import { api } from '../utils/Api.js';


function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);



  React.useEffect(() => {

    api.getProfileInfo().then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar)
    });

    api.getImages().then(res => {
      setCards([...res])
    })


  }, [])

  console.log(cards);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user-info">
          <div className="profile__wrapper">
            <img className="profile__foto" alt="фото профиля" src={userAvatar} />
            <div className="profile__foto profile__foto_type_overlay">
              <img
                className="profile__pen"
                src={penFoto} onClick={props.onEditAvatar}
              />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit" onClick={props.onEditProfile} />
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add" onClick={props.onAddPlace} />
      </section>
      <section className="elements">
        {cards.map(card => (
          
          <article key={card._id} className="elements__item">
          <img className="elements__image" src={card.link} alt={card.name} />
          <button type="button" className="elements__delete" />
          <div className="elements__caption">
            <h2 className="elements__title">{card.name}</h2>
            <div className="elements__container">
              <button type="button" className="elements__like" />
              <span className="elements__counter">{card.likes.length}</span>
            </div>
          </div>
        </article>
          
        ))}
      </section>
    </main>
  )
}

export default Main;