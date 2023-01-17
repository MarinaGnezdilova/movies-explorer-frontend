function Portfolio() {
  return (
    <div className="Portfolio">
      <h2 className="Portfolio__title">Портфолио</h2>
      <nav className="Portfolio__list">
      <a href="site.ru" className="Portfolio__link">
        <p className="Portfolio__link-text">Статичный сайт</p>
        <p className="Portfolio__link-icon">↗</p>
      </a>
      <a href="site.ru" className="Portfolio__link">
        <p className="Portfolio__link-text">Адаптивный сайт</p>
        <p className="Portfolio__link-icon">↗</p>
      </a>
      <a href="site.ru" className="Portfolio__link">
        <p className="Portfolio__link-text">Одностраничное приложение</p>
        <p className="Portfolio__link-icon">↗</p>
      </a>
      </nav>
    
    </div>
  );
}

export default Portfolio;
