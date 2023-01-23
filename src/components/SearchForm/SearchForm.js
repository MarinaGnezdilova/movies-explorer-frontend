import iconSearch from "../../images/icon-search.svg";
import iconArrow from "../../images/icon_arrow.svg";
function SearchForm() {
  return (
    <>
      <form className="SearchForm">
        <div className="SearchForm__icon-search">
          <img
            alt="Иконка поиска"
            src={iconSearch}
            className="SearchForm__icon-search-image"
          />
        </div>
        <input className="SearchForm__input" placeholder="Фильм" required></input>
        <button className="SearchForm__button">
          <img
            src={iconArrow}
            alt="Кнопка в поисковой строке"
            className="SearchForm__button-image"
          />
        </button>
      </form>
      
    </>
  );
}

export default SearchForm;
