import Header from "../Header/Header";
import { Link } from "react-router-dom";
function FormEnter(props) {
  return (
    <div className="FormEnter">
      <div className="FormEnter__header">
        <div className="FormEnter__button-top"> <Header  /> </div>
        <h2 className="FormEnter__title">{props.title}</h2>
        <form className="FormEnter__form">
            <div className="FormEnter__inputs">
            {props.children}
            </div>
          <Link to={props.linkButton}><button className="FormEnter__button">{props.buttonText}</button></Link>
          <div className="FormEnter__block-under-button">
            <p className="FormEnter__text">{props.textUderButton}</p>
            <Link
              to={props.linkUnderButton}
              className="FormEnter__text-link-under-button"
            >
              {props.textLinkUnderButton}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEnter;
