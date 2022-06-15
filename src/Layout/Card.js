import Intro from "../Components/intro";
import CTA from "../Components/CTA";
import AboutUs from "../Components/about-us";
//import CSS
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <Intro></Intro>

      <CTA></CTA>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Card;
