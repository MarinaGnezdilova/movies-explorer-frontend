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
    <main className="Main">
      <header className="Main__container-main">
        <Header />
        <Navigation
          children={
            <div className="Navigation__main">
              <Link to="/signup">
                <button className="Navigation__button-register ">
                  Регистарция
                </button>
              </Link>
              <Link to="/signin">
                <button className="Navigation__button-enter">Войти</button>
              </Link>
            </div>
          }
        />
      </header>

      <Promo />
      <AboutProject
        children={
          <>
            <section className="BlockTitle">
              <h2 className="BlockTitle__title">О проекте</h2>
            </section>
          </>
        }
      />
      <Techs
        children={
            <div className="Main__Techs-blockTitle">
              <h2 className="Main__Techs-blockTitle-title">Технологии</h2>
            </div>
        }
      />
      <AboutMe
        children={
          <>
            <section className="BlockTitle">
              <h2 className="BlockTitle__title">Студент</h2>
            </section>
          </>
        }
      />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;
