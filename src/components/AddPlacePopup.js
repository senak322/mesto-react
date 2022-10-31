import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup (props) {
    const [place, setPlace] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangePlace(e) {
        setPlace(e.target.value)
    }

    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            place,
            link
        })
        
    }

    return (
    <PopupWithForm name={'add'} title={'Новое место'} buttonText={'Создать'} child={<>
        <input
          className="popup__input popup__input_type_place"
          id="place"
          name="place"
          type="text"
          placeholder="Название"
          required=""
          minLength={2}
          maxLength={30}
          value={place || ''}
          onChange={handleChangePlace}
        />
        <span className="popup__error place-error" />
        <input
          className="popup__input popup__input_type_link"
          id="link"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required=""
          value={link || ''}
          onChange={handleChangeLink}
        />
        <span className="popup__error popup__error_type_active link-error" />
  
      </>} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}/>)
}

export default AddPlacePopup;