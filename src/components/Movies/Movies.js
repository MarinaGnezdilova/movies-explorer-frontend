import Header from "../Header/Header";
import { Link } from "react-router-dom";
import accountButton from "../../images/account-logo.svg";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import MoviesCard from "../MoviesCard/MoviesCard";
import cardImage from "../../images/card-image.png";
import cardImage1 from "../../images/card-image1.png";
import cardImage2 from "../../images/card-image2.png";
import cardImage3 from "../../images/card-image3.png";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
function Movies() {
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
      <SearchForm />
      <FilterCheckbox />
      <Preloader />
      <MoviesCardList
        children={
          <>
            <MoviesCard
              imageLink={cardImage}
              nameFilm="Киноальманах «100 лет дизайна»"
              duration="1ч 17м"
            />
            <MoviesCard
              imageLink={cardImage1}
              nameFilm="33 слова о дизайне"
              duration="1ч 17м"
            />
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
          </>
        }
      />
      <Footer />
    </>
  );
}

export default Movies;
