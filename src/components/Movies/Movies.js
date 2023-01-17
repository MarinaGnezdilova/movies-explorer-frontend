import Header from "../Header/Header";
import { Link } from "react-router-dom";
import accountButton from "../../images/account-logo.svg";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
function Movies() {
  return (
    <>
      <div className="Header__header-page-movies">
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
              <Link to="/profile" className="">
              <button className="Navigation__button-header Navigation__button-header_opening-menu">
                <div className="Navigation__account-button-text">Аккаунт</div>
                <div className="Navigation__button-circle">
                  <img src={accountButton} alt="Логотип на кнопке" />
                </div>
              </button>
              </Link>
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
              <Link to="/profile" className="">
              <button className="Navigation__button-header">
                <div className="Navigation__account-button-text">Аккаунт</div>
                <div className="Navigation__button-circle">
                  <img src={accountButton} alt="Логотип на кнопке" />
                </div>
              </button>
              </Link>
              </div>
              
              
            </>
          }
        />
      </div>

      {/* children={
          <div className="Header__header-page-movies">
           
            <Link to="/profile"  className="Header__account-button">
             
            </Link>
          </div>
        }*/}

      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
