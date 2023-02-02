import React from "react";
import buttonDeleteFilm from "../../images/icon-button-delete-film.svg";
import iconSavedFilm from "../../images/icon-saved-film.svg";
import { mainApi } from "../../utils/MainApi.js";
function MoviesCard(props) {
  const [isMoviesSaved, setIsMoviesSaved] = React.useState(false);
 
function handleSaveClick() {
   setIsMoviesSaved(true);
   props.onCardSave(props.movie);
 }
  return (
    <div className="MoviesCard">
      <img
        src={"https://api.nomoreparties.co/"+ props.imageLink}
        alt="Баннер фильма"
        className="MoviesCard__card-image"
      />
      <button className={`${isMoviesSaved ? "MoviesCard__button-saved-film" : "MoviesCard__button-saved-film_inactive"}`}>
        <img
          src={iconSavedFilm}
          alt="Иконка сохраненного фильма"
          className="MoviesCard__button-image"
        />
      </button>
      <button className={`MoviesCard__button-save-film ${isMoviesSaved ? "MoviesCard__button-save-film_inactive" : " "} `} onClick={handleSaveClick} >
        Сохранить
      </button>
      <button className={`MoviesCard__button-delete-film-active ${props.classNameDelete}`}>
        <img
          src={buttonDeleteFilm}
          alt="Иконка удаления фильма"
          className="MoviesCard__button-delete-film-image"
        />
      </button>
      <div className="MoviesCard__about-film">
        <h2 className="MoviesCard__film-name">{props.nameFilm}</h2>
        <div className="MoviesCard__duration">{props.duration}</div>
      </div>
    </div>
  );
}

export default MoviesCard;
