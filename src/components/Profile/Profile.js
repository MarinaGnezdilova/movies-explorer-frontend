import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import accountButton from "../../images/account-logo.svg";
function Profile(props) {
  return (
    <>
    <div className="Profile">
      <Header />
      <Navigation
          children={
            <>
              <div className="Navigation__wrapper">
                <input type="checkbox" id="check-menu" />
                <label for="check-menu"></label>
                <div className="Navigation__burger-line Navigation__first"></div>
                <div className="Navigation__burger-line Navigation__second"></div>
                <div className="Navigation__burger-line Navigation__third"></div>
                <div className="Navigation__burger-line Navigation__fourth"></div>
                <div className="Navigation__menu1">
              <div className="Navigation__menu-opening-buttons">
              <Link to="/" className="">
                  <button className="Navigation__menu-opening-button">Главная</button>
                </Link>
                <Link to="/movies" className="">
                  <button className="Navigation__menu-opening-button">Фильмы</button>
                </Link>
                <Link to="/saved-movies" className="">
                  <button className="Navigation__menu-opening-button">
                    Сохранённые фильмы
                  </button>
                </Link>
              </div>
              <button className="Navigation__button-header Navigation__button-header_opening-menu">
                <div className="Navigation__account-button-text">Аккаунт</div>
                <div className="Navigation__button-circle">
                  <img src={accountButton} alt="Логотип на кнопке" />
                </div>
              </button>
              </div>
              </div>
              <div className="Navigation__menu">
              <div className="Navigation__buttons-about-films">
                <Link to="/movies" className="Navigation__button">
                  <button className="Navigation__button-header">Фильмы</button>
                </Link>
                <Link to="/saved-movies" className="Navigation__button">
                  <button className="Navigation__button-header">
                    Сохранённые фильмы
                  </button>
                </Link>
              </div>
              <button className="Navigation__button-header">
                <div className="Navigation__account-button-text">Аккаунт</div>
                <div className="Navigation__button-circle">
                  <img src={accountButton} alt="Логотип на кнопке" />
                </div>
              </button>
              </div>
            </>
          }
        />
       
      </div>
       <div className="Profile__account-data">
        <h2 className="Profile__title">Привет, Виталий!</h2>
       <div className="Profile__input">
         <p className="Profile__label-input">Имя</p>
         <input id="name"></input>
         <span className="Profile__current-data">Виталий</span>
       </div>
      <div className="Profile__input">
      <p className="Profile__label-input">E-mail</p>
       <input id="email"></input>
       <span className="Profile__current-data">pochta@yandex.ru</span>
      </div>
      <button className="Profile__button Profile__button-edit">Редактировать</button>
      <button className="Profile__button Profile__button-exit">Выйти из аккаунта</button>
   </div>

   </>
  )}

export default Profile;
