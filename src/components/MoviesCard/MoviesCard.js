
import iconSavedFilm from "../../images/icon-saved-film.png";
function MoviesCard(props) {
  return (
    <div className="MoviesCard">
      <img
        src={props.imageLink}
        alt="Баннер фильма"
        className="MoviesCard__card-image"
      />
      <button className="MoviesCard__button-saved-film">
        <img
          src={iconSavedFilm}
          alt="Иконка сохраненного фильма"
          className="MoviesCard__buttom-image"
        />
      </button>
      <button className="MoviesCard__buttom-save-film_active">Сохранить</button>
      <div className="MoviesCard__about-film">
        <h2 className="MoviesCard__film-name">
          {props.nameFilm}
        </h2>
        <div className="MoviesCard__duration">{props.duration}</div>
      </div>
    </div>
  );
}

export default MoviesCard;
