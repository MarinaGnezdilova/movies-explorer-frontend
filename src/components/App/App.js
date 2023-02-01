import React, { useState } from "react";
import Main from "../Main/Main";
import FormEnter from "../FormEnter/FormEnter";
import { Route, Routes, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import { api } from "../../utils/MoviesApi.js";
import { mainApi } from "../../utils/MainApi.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Formik } from "formik";
import Header from "../Header/Header";
import * as yup from "yup";
import { Link } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState({});
  const films = api
    .getFilms()
    .then((res) => {
      localStorage.setItem("movies", JSON.stringify(res));
    })
    .catch((e) => {
      alert("Не удалось получить фильмы");
    });

  const initialMovies = JSON.parse(localStorage.getItem("movies"));

  const navigate = useNavigate();
 
  /*const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailForLogin, setEmailForLogin] = useState("");
  const [passwordForLogin, setPasswordForLogin] = useState("");*/
  const [currentUser, setCurrentUser] = React.useState({});
  /* const [isRegisterCompleted, setIsRegisterCompleted] = React.useState(false);*/

  function onRegisterCompleted() {
    navigate("/signin");
  }

  function onLoginCompleted() {
    navigate("/movies");
    setLoggedIn(true);
  }

  const auth = (jwt) => {
    return mainApi
      .getUserInfo(jwt)
      .then((res) => {
        setLoggedIn(true);
      })
      .catch((e) => {
        alert("Что-то пошло не так!");
      });
  };

  React.useEffect(() => {
    if (searchValue.length !== 0) {
    const filtered = initialMovies.filter(el => {
      return el.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    });
      setFilteredMovies(filtered);
      localStorage.setItem("filtredMovies", JSON.stringify(filtered));
  }
  }
  , [searchValue]);



  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth(jwt);
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
          console.log(currentUser);
        })
        .catch((e) => {
          alert("Не удалось получить данные пользователя");
        });
    }
  }, [loggedIn]);

  const regexName = /^[a-zа-я\ \-]+$/gi;

  const validationsSchemaLogin = yup.object().shape({
    email: yup
      .string()
      .email("Поле должно быть email")
      .required("Обязательное поле"),
    password: yup.string().required("Обязательное поле"),
  });

  const validationsSchemaRegister = yup.object().shape({
    email: yup
      .string()
      .email("Поле должно быть email")
      .required("Обязательное поле"),
    password: yup.string().required("Обязательное поле"),
    name: yup
      .string()
      .required("Обязательное поле")
      .matches(
        regexName,
        "Используйте только русские или латинские буквы, пробел или тире"
      ),
  });

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setLoggedIn, setCurrentUser, loggedIn, setSearchValue, filteredMovies }}
    >
      <page className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route
            path="/signup"
            element={
              <div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                  }}
                  validateOnBlur
                  onSubmit={(values) => {
                    mainApi
                      .register(values.name, values.email, values.password)
                      .then(() => {
                        onRegisterCompleted();
                      })
                      .catch((e) => {
                        alert("Что-то пошло не так!");
                      });
                  }}
                  validationSchema={validationsSchemaRegister}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    dirty,
                  }) => (
                    <main className="Register">
                      <div className="Register__header">
                        <div className="Register__button-top">
                          <Header />
                        </div>
                        <h2 className="Register__title">Добро пожаловать!</h2>
                        <div className="Register__form">
                          <div className="Register__inputs">
                            <label className="Register__label-form">Имя</label>
                            <input
                              type={`text`}
                              name={`name`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              className="Register__input"
                            />
                            {touched.name && errors.name && (
                              <span className={`FormEnter__label-error`}>
                                {errors.name}
                              </span>
                            )}
                            <label className="Register__label-form">
                              Email
                            </label>
                            <input
                              type={`text`}
                              name={`email`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className="Register__input"
                            />
                            {touched.email && errors.email && (
                              <span className={`FormEnter__label-error`}>
                                {errors.email}
                              </span>
                            )}
                            <label className={`Register__label-form`}>
                              Пароль
                            </label>
                            <input
                              type={`password`}
                              name={`password`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              className="Register__input"
                            />
                            {touched.password && errors.password && (
                              <span className={`FormEnter__label-error`}>
                                {errors.password}
                              </span>
                            )}
                            <button
                              disabled={!isValid || !dirty}
                              onClick={handleSubmit}
                              type="submit"
                              className="Register__button"
                            >
                              Зарегистрироваться
                            </button>
                            <div className="Register__block-under-button">
                              <p className="Register__text">
                                Уже зарегистрированы?
                              </p>
                              <button
                                onClick={onRegisterCompleted}
                                className="Register__text-link-under-button"
                              >
                                Войти
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                  )}
                </Formik>
              </div>
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validateOnBlur
                  onSubmit={(values) => {
                    mainApi
                      .login(values.email, values.password)
                      .then((res) => {
                        const token = res.token;
                        localStorage.setItem("jwt", token);
                      })
                      .then(() => {
                        onLoginCompleted();
                      })
                      .catch((e) => {
                        alert("Неверный логин или пароль");
                      });
                  }}
                  validationSchema={validationsSchemaLogin}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    handleSubmit,
                    dirty,
                  }) => (
                    <main className="FormEnter">
                      <div className="FormEnter__header">
                        <div className="FormEnter__button-top">
                          <Header />
                        </div>
                        <h2 className="FormEnter__title">Рады видеть!</h2>
                        <div className="FormEnter__form">
                          <div className="FormEnter__inputs">
                            <label className={`FormEnter__label-form`}>
                              E-mail
                            </label>
                            <input
                              type={`text`}
                              name={`email`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              className="FormEnter__input"
                            />
                            {touched.email && errors.email && (
                              <span className={`FormEnter__label-error`}>
                                {errors.email}
                              </span>
                            )}
                            <label className={`FormEnter__label-form`}>
                              Пароль
                            </label>
                            <input
                              type={`password`}
                              name={`password`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              className="FormEnter__input"
                            />
                            {touched.password && errors.password && (
                              <span className={`FormEnter__label-error`}>
                                {errors.password}
                              </span>
                            )}
                          </div>
                          <button
                            disabled={!isValid || !dirty}
                            onClick={handleSubmit}
                            type="submit"
                            className="FormEnter__button"
                          >
                            Войти
                          </button>
                          <div className="FormEnter__block-under-button">
                            <p className="FormEnter__text">
                              Еще не зарегистрированы?
                            </p>
                            <Link
                              to="/signup"
                              className="FormEnter__text-link-under-button"
                            >
                              Регистрация
                            </Link>
                          </div>
                        </div>
                      </div>
                    </main>
                  )}
                </Formik>
              </div>
            }
          ></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </page>
    </CurrentUserContext.Provider>
  );
}

export default App;
