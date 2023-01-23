import React from "react";
import Main from "../Main/Main";
import FormEnter from "../FormEnter/FormEnter";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
function App() {
  return (
    <page className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route
          path="/signup"
          element={
            <Register
              title="Добро пожаловать!"
              children={
                <>
                  <label className="Register__label-form">Имя</label>
                  <input className="Register__input" required></input>
                  <label className="Register__label-form">E-mail</label>
                  <input className="Register__input" required></input>
                  <label className="Register__label-form">Пароль</label>
                  <input className="Register__input" required></input>
                </>
              }
              buttonText="Зарегистрироваться"
              textUderButton="Уже зарегистрированы?"
              linkUnderButton="/signin"
              textLinkUnderButton="Войти"
              linkButton="/signin"
            ></Register>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <FormEnter
              title="Рады видеть!"
              children={
                <>
                  <label className="FormEnter__label-form">E-mail</label>
                  <input className="FormEnter__input" required></input>
                  <label className="FormEnter__label-form">Пароль</label>
                  <input className="FormEnter__input" required></input>
                </>
              }
              buttonText="Войти"
              textUderButton="Ещё не зарегистрированы?"
              linkUnderButton="/signup"
              textLinkUnderButton="Регистрация"
              linkButton="/movies"
            ></FormEnter>
          }
        ></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="*" element={<NotFound />}></Route>
      </Routes>
    </page>
  );
}

export default App;
