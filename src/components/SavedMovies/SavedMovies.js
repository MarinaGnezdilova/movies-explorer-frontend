import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import accountButton from "../../images/account-logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import cardImage2 from "../../images/card-image2.png";
import cardImage3 from "../../images/card-image3.png";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
function SavedMovies() {
  return (
    <main className="SavedMovies">
      <header className="App__header-page-movies">
        <Header />
        <Navigation
          children={
            <>
              <div className="Navigation__wrapper">
                <input type="checkbox" id="check-menu" />
                <label for="check-menu" className="Navigation__label"></label>
                <div className="Navigation__burger-line Navigation__first"></div>
                <div className="Navigation__burger-line Navigation__second"></div>
                <div className="Navigation__burger-line Navigation__third"></div>
                <div className="Navigation__burger-line Navigation__fourth"></div>
              
                <div className="Navigation__menu1">
                  <div className="Navigation__menu-opening-buttons">
                    <Link to="/" className="">
                      <button className="Navigation__menu-opening-button">
                        Главная
                      </button>
                    </Link>
                    <Link to="/movies" className="">
                      <button className="Navigation__menu-opening-button">
                        Фильмы
                      </button>
                    </Link>
                    <Link to="/saved-movies" className="">
                      <button className="Navigation__menu-opening-button">
                        Сохранённые фильмы
                      </button>
                    </Link>
                  </div>
                  <Link to="/profile" className="Navigation__button">
                    <button className="Navigation__button-header Navigation__button-header_opening-menu">
                      <div className="Navigation__account-button-text">
                        Аккаунт
                      </div>
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
                    <button className="Navigation__button-header">
                      Фильмы
                    </button>
                  </Link>
                  <Link to="/saved-movies" className="Navigation__button">
                    <button className="Navigation__button-header">
                      Сохранённые фильмы
                    </button>
                  </Link>
                </div>
                <Link to="/profile" className="Navigation__link">
                  <button className="Navigation__button-header">
                    <div className="Navigation__account-button-text">
                      Аккаунт
                    </div>
                    <div className="Navigation__button-circle">
                      <img src={accountButton} alt="Логотип на кнопке" />
                    </div>
                  </button>
                </Link>
              </div>
            </>
          }
        />
      </header>
      <SearchForm />
      <FilterCheckbox />
      <Preloader />
      <SavedMoviesCardList
        children={
          <div className="SavedMoviesCardList__films">
            <MoviesCard
              imageLink={cardImage2}
              nameFilm="В погоне за Бенкси"
              duration="1ч 17м"
            />
            <MoviesCard
              imageLink={cardImage3}
              nameFilm="Бег это свобода"
              duration="1ч 17м"
            />
             <MoviesCard
              imageLink={cardImage2}
              nameFilm="В погоне за Бенкси"
              duration="1ч 17м"
            />
          </div>
        }
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;
