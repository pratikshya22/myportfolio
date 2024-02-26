import data from "../../data/index.json";
import Footer from "./Footer";

export default function Education() {
  return (
    <div>
    <section className="Education--section" id="Education">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Education</p>
          <h2 className="sections--heading">Education</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.Education?.map((item, index) => (
          <div key={index} className="Education--section--card">
            <p className="text-md">{item.description}</p>
            <div className="Education--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md Education--author--name">
                  {item.author_name}
                </p>
                <p className="text-md Education--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
}
