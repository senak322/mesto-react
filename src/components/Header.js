import logoHeader from '../pictures/logo__header.svg'

function Header () {
    return (
        <header className="header">
          <img
            className="logo"
            src={logoHeader}
            alt="Место. Белый логотип"
          />
        </header>
    )
}

export default Header;