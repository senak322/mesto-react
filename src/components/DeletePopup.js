import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeletePopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onDelete(props.card)
    }

    return (
    <PopupWithForm name={'delete'} title={'Вы уверены?'} buttonText={'Да'} isOpen={props.isOpen} onSubmit={handleSubmit} onClose={props.onClose} />)
}

export default DeletePopup;