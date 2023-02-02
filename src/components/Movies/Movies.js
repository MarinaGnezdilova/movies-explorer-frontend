import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import accountButton from "../../images/account-logo.svg";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import MoviesCard from "../MoviesCard/MoviesCard";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function Movies(props) {
  const windowInnerWidth = window.innerWidth;
  const currentMoviesPerRender= () => {
    if (windowInnerWidth >= 1280) {
      return 12
    } else if(windowInnerWidth >= 768) { 
      return 8} else { return 5}
  };
  
  const { filteredMovies } = React.useContext(CurrentUserContext);
  /*const firstRenderMovies = JSON.parse(localStorage.getItem("filtredMovies"));*/
  const [currentRenderMovies, setCurrentRenderMovies] = useState(0);
  const [moviesPerRender, setMoviesPerRender] = useState(currentMoviesPerRender());
  const [renderMovies, setRenderMovies] = useState([]);
  const lastMovieIndex = (moviesPerRender+currentRenderMovies-1);
  /*const currentMovies = filteredMovies.slice(0, (lastMovieIndex));*/
  const nextRender = () => {
    const currentWindowInnerWidth = window.innerWidth;
    const mountAdded = () => {
      if (currentWindowInnerWidth >= 1280) {
        return 3
      } else { 
        return 2} 
    };
    setCurrentRenderMovies( prev => prev + mountAdded());
};
  function firstRender () {
    console.log('1');
    setCurrentRenderMovies(1);
    console.log(filteredMovies);
    /*const render = JSON.parse(localStorage.getItem("filtredMovies"));*/
    setRenderMovies(filteredMovies || []);
   
   /* console.log(render);*/
  };
  const isButtonElseHidden = /*filteredMovies*/renderMovies.length <= lastMovieIndex;
  console.log(renderMovies);
  console.log(filteredMovies);

 React.useEffect(() => {
  const firstRenderMovies = JSON.parse(localStorage.getItem("filtredMovies"));
  console.log(firstRenderMovies);
  console.log('2');
   setRenderMovies(firstRenderMovies || []);
  },[]);

  React.useEffect(() => {
    setRenderMovies(filteredMovies|| []);
    console.log('1');
  }, [filteredMovies]);

  function onCardSave(movie) {
    props.onCardSave(movie)
  }

  return (
    <>
      <header className="App__header-page-movies">
        <Header />
        <Navigation
          children={
            <>
              <div className="Navigation__wrapper">
                <input type="checkbox" id="check-menu" />
                <label className="Navigation__label" for="check-menu"></label>
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
                  <Link to="/profile" className="Navigation__link">
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
      <SearchForm 
        firstRender ={firstRender}
        setRenderMovies ={setRenderMovies}

      />
      <FilterCheckbox />
      <Preloader />
      <MoviesCardList
        children={
          <>
          {/*{(firstRenderMovies.length > 0) && firstRenderMovies.slice(0, (lastMovieIndex)).map((movie, i) => (
          <MoviesCard
            key={movie.id}
            imageLink={movie.image.url}
            nameFilm={movie.nameRU}
            duration={movie.duration}
          />
          ))}*/}
          {(/*filteredMovies*/renderMovies.length > 0) && /*currentMovies*//*filteredMovies*/renderMovies.slice(0, (lastMovieIndex)).map((movie, i) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            imageLink={movie.image.url}
            nameFilm={movie.nameRU}
            duration={movie.duration}
            onCardSave={onCardSave}
            classNameDelete="MoviesCard__button-delete-film-inactive"

          />
          )
          )
        }
          </>
        }
        nextRender={nextRender}
        isButtonElseHidden={isButtonElseHidden}
      />
      <Footer />
    </>
  );
}

export default Movies;
