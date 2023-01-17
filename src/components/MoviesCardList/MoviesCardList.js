import MoviesCard from "../MoviesCard/MoviesCard";
import cardImage from "../../images/card-image.png";
import cardImage1 from "../../images/card-image1.png";
import cardImage2 from "../../images/card-image2.png";
import cardImage3 from "../../images/card-image3.png";
function MoviesCardList() {
    return (
        <div className="MoviesCardList">
<div className="MoviesCardList__film">
            <MoviesCard 
            imageLink={cardImage}
            nameFilm='Киноальманах «100 лет дизайна»'
            duration='1ч 17м'
            />
            <MoviesCard 
            imageLink={cardImage1}
            nameFilm='33 слова о дизайне'
            duration='1ч 17м'
            />
             <MoviesCard 
            imageLink={cardImage2}
            nameFilm='В погоне за Бенкси'
            duration='1ч 17м'
            />
             <MoviesCard 
            imageLink={cardImage3}
            nameFilm='Бег это свобода'
            duration='1ч 17м'
            />
          </div>
          <div>
            <button className="MoviesCardList_button-else">Еще</button>
          </div>
        </div>
          
    )
}

export default MoviesCardList;