import Intro from "../Components/intro";
import BottomCard from "./bottomCard";
//import CSS
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <Intro></Intro>
      <BottomCard></BottomCard>
    </div>
  );
};

export default Card;
