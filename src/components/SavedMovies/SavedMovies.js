import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import accountButton from "../../images/account-logo.svg";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
function SavedMovies() {
  return (
    <div className="SavedMovies">
       <div className="Header__header-page-movies">
    <Header />
      <Navigation
        children={
          <>
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
          </>
        }
      />
    </div>
    <SearchForm />
      <Preloader />
      <MoviesCardList />
      <Footer />
      </div>
  )}

export default SavedMovies;
