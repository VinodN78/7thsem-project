import "./hero.scss";

const Hero = ({ title, text,  reverse }) => {
  return (
    <section className="hero__wrapper">
      {reverse ? (
        <div className="hero__container">
          <div className="content">
            <div className="heading">
              <h1>{title} </h1>
            </div>
            <p>{text}</p>
          </div>
          <div className="hero_container"></div>
        </div>
      ) : (
        <div className="hero__container">
          <div className="hero_container"></div>
          <div className="content">
            <div className="heading">
              <h1>{title} </h1>
            </div>
            <p>{text}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;