import React from 'react';

function Card(props) {
    
    function handleClick() {
        props.onCardClick(props.card)
    }

    return(
        <article key={props.card._id} className="elements__item">
          <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
          <button type="button" className="elements__delete" />
          <div className="elements__caption">
            <h2 className="elements__title">{props.card.name}</h2>
            <div className="elements__container">
              <button type="button" className="elements__like" />
              <span className="elements__counter">{props.card.likes.length}</span>
            </div>
          </div>
        </article>
    )
}

export default Card;