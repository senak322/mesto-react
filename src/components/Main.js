import penFoto from '../pictures/penfoto.svg'

function Main (props) {

    

    return (
        <main className="content">
          <section className="profile">
            <div className="profile__user-info">
              <div className="profile__wrapper">
                <img className="profile__foto" alt="фото профиля" />
                <div className="profile__foto profile__foto_type_overlay">
                  <img
                    className="profile__pen"
                    src={penFoto} onClick={props.onEditAvatar}
                  />
                </div>
              </div>
              <div className="profile__info">
                <div className="profile__container">
                  <h1 className="profile__name" />
                  <button type="button" className="profile__edit" onClick={props.onEditProfile} />
                </div>
                <p className="profile__job" />
              </div>
            </div>
            <button type="button" className="profile__add" onClick={props.onAddPlace} />
          </section>
          <section className="elements"></section>
        </main>
    )
}

export default Main;