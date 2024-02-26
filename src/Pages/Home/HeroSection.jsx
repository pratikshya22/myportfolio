export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Pratikshya Karki</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">A Data Science</span>{" "}
            <br />
            Enthusiast
          </h1>
          <p className="hero--section-description">
            As a part of my project, I have made this portfolio website using react that showcases my own details.
            <br />
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
