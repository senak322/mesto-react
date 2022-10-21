import React from 'react';
import penFoto from '../pictures/penfoto.svg';
import { api } from '../utils/Api.js';
import Card from './Card.js';


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
    }).catch((err) => { console.log(err) });

    api.getImages().then(res => {
      setCards([...res])
    }).catch((err) => { console.log(err) })


  }, [])

  

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user-info">
          <div className="profile__wrapper">
            <img className="profile__foto" alt="фото профиля" src={userAvatar} />
            <div className="profile__foto profile__foto_type_overlay" onClick={props.onEditAvatar}>
              <img
                className="profile__pen"
                src={penFoto} 
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
        {cards.map(cardEl => (
          
          <Card card={cardEl} key={cardEl._id} onCardClick={props.onCardClick}/>
        ))}
      </section>
    </main>
  )
}

export default Main;