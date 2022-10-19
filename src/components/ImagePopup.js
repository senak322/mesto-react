import React from 'react';

function ImagePopup () {
    return (
        <div className="popup popup_type_photo">
        <div className="popup__photo-container">
          <button type="button" className="popup__close popup__close_type_photo" />
          <img className="popup__image" src="#" alt="" />
          <p className="popup__place" />
        </div>
      </div>
    )
}

export default ImagePopup;