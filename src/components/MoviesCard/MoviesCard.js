import buttonDeleteFilm from "../../images/icon-button-delete-film.svg";
import iconSavedFilm from "../../images/icon-saved-film.png";
function MoviesCard(props) {
  return (
    <div className="MoviesCard">
      <img
        src={props.imageLink}
        alt="Баннер фильма"
        className="MoviesCard__card-image"
      />
      <button className="MoviesCard__button-saved-film MoviesCard__button-saved-film_inactive">
        <img
          src={iconSavedFilm}
          alt="Иконка сохраненного фильма"
          className="MoviesCard__button-image"
        />
      </button>
      <button className="MoviesCard__button-save-film_active MoviesCard__button-save-film_inactive">
        Сохранить
      </button>
      <button className="MoviesCard__button-delete-film-active">
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
