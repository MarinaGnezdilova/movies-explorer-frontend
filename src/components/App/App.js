import React, { useCallback, useEffect, useState } from "react";
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
import PrivateRoute from "../../utils/PrivateRoute";

function App() {
  const regexName = /^[a-zа-я\ \-]+$/gi;

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [initialSavedMovies, setInitialSavedMovies] = useState([]);
  const [filtredSavedMovies, setFiltredSavedMovies] = useState([]);
  const [searchValueSavedFilm, setSearchValueSavedFilm]= useState('');
  const [isRegisterUnsuccessful, setIsRegisterUnsuccessful] = React.useState(false);
  const [ isCheckboxActive, setIsCheckboxActive] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isResultSearchNull, setIsResultSearchNull] =React.useState(true);

  const navigate = useNavigate();

  //получаем фильмы из внешнего апи, получаем фильмы из localStorage.filtredMovies
  const getFilms = useCallback(() => api
  .getFilms()
  .then((res) => {
    const localFilteredMovies =  JSON.parse(localStorage.getItem("filtredMovies"));
    setInitialMovies(res); 

    if (!localFilteredMovies) {
      setFilteredMovies([]); 
    }
  })
  .catch((e) => {
    alert("Не удалось получить фильмы1");
  }), []);

  React.useEffect(() => {
    setIsLoading(true);
    getFilms();
    const localFilteredMovies =  JSON.parse(localStorage.getItem("filtredMovies"));
    const localQuery = JSON.parse(localStorage.getItem("query"));

    localFilteredMovies && setFilteredMovies(localFilteredMovies);
    localQuery && setSearchValue(localQuery);
    setIsLoading(false);
    const jwt = localStorage.getItem("jwt");
    /*if (jwt) {
      auth(jwt);
    }*/
    console.log(jwt)
    console.log(loggedIn);
  }, [ ]);

 
  
const getSavedfilms = useCallback(() => mainApi
.getMovies()
.then((res) => {
  console.log(res.data);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log(user.data._id);
 const filtred = res.data.filter(el => {
    return el.owner === user.data._id});
    console.log(filtred);
    localStorage.setItem("savedMovies", JSON.stringify(filtred));
    setInitialSavedMovies(filtred);
})
.catch((e) => {
  alert("Не удалось получить фильмы2");
}), []);

React.useEffect(() => {
  if (loggedIn) { 
    console.log(currentUser);
    getSavedfilms();
  }
 
  /*const localQuery = JSON.parse(localStorage.getItem("querySaved"));
  localQuery && setSearchValueSavedFilm(localQuery);*/
}, [])

  
  function onRegisterCompleted(email, password) {
    mainApi.login(email, password)
    .then((res) => {
      const token = res.token;
      localStorage.setItem("jwt", token);
      onLoginCompleted();
    })
  }

  function onLoginCompleted() {
    navigate("/movies");
    setLoggedIn(true);
  }


  React.useEffect(() => {
    setIsResultSearchNull(false);
    setIsLoading(true);
    console.log(3);
    if (searchValue.length !== 0 && !initialMovies === false) {
    const filtered = initialMovies.filter(el => {
      return el.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    });
      setFilteredMovies(filtered);
      localStorage.setItem("filtredMovies", JSON.stringify(filtered));
      console.log(filtered.length);
      if(filtered.length === 0) {
        setIsResultSearchNull(true);
      }
  }
  }
  , [searchValue, initialMovies]);

React.useEffect(() => {
  setIsLoading(true);
  /*if (searchValueSavedFilm.length !== 0) {*/
  const initiaMovies = JSON.parse(localStorage.getItem("savedMovies"));
    
  const filtered = initiaMovies && initiaMovies.filter(el => {
      return el.nameRU.toLowerCase().includes(searchValueSavedFilm.toLowerCase())
    });
    setInitialSavedMovies(filtered);
    /*localStorage.setItem("filtredSavedMovies", JSON.stringify(filtered));*/
  /*}*/
}, [searchValueSavedFilm /*initialSavedMovies*/])


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
          console.log(6);
          console.log(res);
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
        })
        .catch((e) => {
          alert("Не удалось получить данные пользователя");
        });
    }
  }, [loggedIn]);

//схема валидации формы авторизации
  const validationsSchemaLogin = yup.object().shape({
    email: yup
      .string()
      .email("Поле должно быть email")
      .required("Обязательное поле"),
    password: yup.string().required("Обязательное поле"),
  });

//схема валидации формы регистации
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

 //сохранение фильма 
  function handleSaveMovie(movie) {
    console.log(movie.id);
    mainApi.saveMovie(movie)
    .then((res) => {
      console.log(res.data);
      console.log(2);
      if (!initialSavedMovies) {
        console.log(1);
        console.log(res.data);
        console.log(initialSavedMovies);
        setInitialSavedMovies(res.data)
      } else {
        console.log(3);
        console.log(res.data);
        console.log(initialSavedMovies);
        setInitialSavedMovies([...initialSavedMovies,res.data]);
        console.log(res.data);
      }
    })
    .then(() => {
      getSavedfilms();
    })
    .catch((e)=>{
      alert("Не удалось добавить фильмы3");
    })
  }

//удаление фильма из сохраненных
  function hadleDeleteMovie(movie) {
    console.log(movie.id);
    mainApi.deleteMovie(movie.id)
    .then(() => {
      getSavedfilms();
    })
    .catch((e)=>{
      alert("Не удалось удалить фильм из базы");
    })
  }

  function handleActiveCheckbox() {
    console.log(2);
    if(isCheckboxActive) {
      setIsCheckboxActive(false);
    } else {
      setIsCheckboxActive(true);
    }
   
  }


  return (
    <CurrentUserContext.Provider
      value={{ 
        currentUser, setLoggedIn, setCurrentUser, loggedIn, 
        setSearchValue, filteredMovies, initialSavedMovies, setSearchValueSavedFilm, setInitialSavedMovies, isCheckboxActive,
        isLoading,setIsLoading,isResultSearchNull, setIsResultSearchNull
       }}
    >
      <page className="App">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/movies" element={<Movies 
            onCardSave={handleSaveMovie}
            onCardDelete={hadleDeleteMovie}
            onActiveCheckbox={handleActiveCheckbox}
          />} />
            <Route path="/saved-movies" element={<SavedMovies 
            onDeleteMovie={hadleDeleteMovie}
            onActiveCheckbox={handleActiveCheckbox}
          />} />
          <Route exact path="/profile" element={<Profile />}></Route>
          </Route>
          <Route exact path="/" element={<Main />} />
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
                      .then((res)=> { 
                        setIsRegisterUnsuccessful(false);
                        onRegisterCompleted(values.email, values.password);
                      })
                      .catch((e) => {
                        setIsRegisterUnsuccessful(true);
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
                            <span className={`${isRegisterUnsuccessful ? "Register__error-message_active" : "Register__error-message"}`}>Ошибка регистации</span>
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
                      /*.then(() => {
                        mainApi
                       .getUserInfo()
                      .then((res) => { 
                       console.log(res)ж
                       setCurrentUser(res);
                       localStorage.setItem("currentUser", JSON.stringify(res));
                       })
                       .catch((e) => {
                        alert("Не удалось получить данные пользователя");
                      })
                      })*/
                      .then(() => {
                        console.log(5);
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
          
          {/*<Route path="*" element={<NotFound />}></Route>*/}
        </Routes>
      </page>
    </CurrentUserContext.Provider>
  );
}

export default App;
