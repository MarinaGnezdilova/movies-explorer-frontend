function MoviesCardList(props) {
  return (
    <section className="MoviesCardList">
      <div className="MoviesCardList__film">{props.children}</div>
      <div>
        <button className="MoviesCardList_button-else">Еще</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
