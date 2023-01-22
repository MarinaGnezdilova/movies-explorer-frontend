import Header from "../Header/Header";
import { Link } from "react-router-dom";
function Register(props) {
    return (
        <div className="Register">
        <div className="Register__header">
          <div className="Register__button-top">
            {" "}
            <Header />{" "}
          </div>
          <h2 className="Register__title">{props.title}</h2>
          <form className="Register__form">
            <div className="Register__inputs">{props.children}</div>
            <Link to={props.linkButton}>
              <button className="Register__button">{props.buttonText}</button>
            </Link>
            <div className="Register__block-under-button">
              <p className="Register__text">{props.textUderButton}</p>
              <Link
                to={props.linkUnderButton}
                className="Register__text-link-under-button"
              >
                {props.textLinkUnderButton}
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;