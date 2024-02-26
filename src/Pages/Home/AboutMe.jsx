import Footer from "./Footer";

export default function AboutMe() {
  return (
    <div>
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
              As a 2nd semester data science student with a growing proficiency in Data Analytics 
              with Python, I am passionate in uncovering insights and patterns within diverse 
              datasets. My enthusiasm lies in utilizing data-driven insights to create impactful 
              digital experiences.I am actively seeking opportunities for collaboration projects 
              that align with my interests and aspirations.
            </p>
            <p className="hero--section-description">
              If you share a passion for data-driven 
              solutions, I would be delighted to connect and explore potential collaborations or 
              learn from industry professionals in this exciting field.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
   
  );
}
