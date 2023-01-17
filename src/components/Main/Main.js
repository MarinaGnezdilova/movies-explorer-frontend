import React from "react";
import Promo from "../Promo/Promo";
import Header from "../Header/Header";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="Main">
      <div className="Header__container-main">
        <Header />
        <Navigation 
        children={
          <div className="Navigation__main">
           <Link to="/signup">
                <button className="Navigation__button-register ">Регистарция</button>
              </Link>
              <Link to="/signin">
                <button className="Navigation__button-enter">Войти</button>
              </Link>
          </div>
        }
        />
      </div>

      <Promo />
      {/* <BlockTitle title="О проекте"/>*/}
      <AboutProject
        children={
          <>
            <div className="BlockTitle">
              <h2 className="BlockTitle__title">О проекте</h2>
            </div>
          </>
        }
      />
      <Techs
        children={
          <>
            <div className="BlockTitle">
              <h2 className="BlockTitle__title">Технологии</h2>
            </div>
          </>
        }
      />
      <AboutMe
        children={
          <>
            <div className="BlockTitle">
              <h2 className="BlockTitle__title">Студент</h2>
            </div>
          </>
        }
      />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Main;
