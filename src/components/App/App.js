import React from "react";
import Main from "../Main/Main";
import FormEnter from "../FormEnter/FormEnter";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route  
          path="/signup"
          element={
            <FormEnter
              title="Добро пожаловать!"
              children={
                <>
                  <label className="FormEnter__label-form"></label>
                  <input className="FormEnter__input"></input>
                  <label className="FormEnter__label-form"></label>
                  <input className="FormEnter__input"></input>
                  <label className="FormEnter__label-form"></label>
                  <input className="FormEnter__input"></input>
                </>
              }
              buttonText="Зарегистрироваться"
              textUderButton="Уже зарегистрированы?"
              linkUnderButton="/signin"
              textLinkUnderButton="Войти"
              linkButton="/signin"
            ></FormEnter>
          }
        ></Route>
        <Route path="/signin" element={
           <FormEnter
           title="Рады видеть!"
           children={
             <>
               <label className="FormEnter__label-form"></label>
               <input className="FormEnter__input"></input>
               <label className="FormEnter__label-form"></label>
               <input className="FormEnter__input"></input>
             </>
           }
           buttonText="Войти"
           textUderButton="Ещё не зарегистрированы?"
           linkUnderButton="/signup"
           textLinkUnderButton="Зарегистрироваться"
           linkButton="/movies"
           ></FormEnter>}></Route>
        <Route exact  path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
