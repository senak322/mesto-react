function PopupWithForm(props) {
    return (

        <div className={`popup popup_is-open popup_type_${props.name}`}>
            <div className={`popup__content popup__content_type_${props.name}`}>
                <button type="button" className={`popup__close popup__close_type_${props.name}`} />
                <h3 className={`popup__title popup__title_type_${props.name}`}>
                    {props.title}
                </h3>
                <form
                    className="popup__form"
                    action="#"
                    name={`${props.name}-profile`}
                    noValidate=""
                >
                    {props.child}
                </form>
            </div>
        </div>


    )
}

export default PopupWithForm;