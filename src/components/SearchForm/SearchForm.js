import React from "react";
import iconSearch from "../../images/icon-search.svg";
import iconArrow from "../../images/icon_arrow.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function SearchForm(props) {
  const { setSearchValue } = React.useContext(CurrentUserContext);
  const { filteredMovies } = React.useContext(CurrentUserContext);
  const [value, setValue] = React.useState('');
  const isValueValid = value === "";
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchValue(value);
    props.firstRender();
    localStorage.setItem("query", JSON.stringify(value));
    
    
  }
  React.useEffect(() => {
    const query = JSON.parse(localStorage.getItem("query"));
    console.log(query);
    setValue(query);
  },[]);

  
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
        <input 
          className="SearchForm__input" 
          placeholder="Фильм" 
          required
          value={value} onChange={handleChange}
        />
        <button type="submit" disabled={isValueValid} className="SearchForm__button" onClick={handleSubmit}>
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
