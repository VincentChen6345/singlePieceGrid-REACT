import "./CTA.css";

const CTA = () => {
  return (
    <div className="CTA">
      <h2 className="h2">Monthly Subscription</h2>
      <p className="text-cost">
        <span className="price-number">$29</span> per month
      </p>
      <p className="text-cost-description">
        Full access for less than $1 a day
      </p>
      <button className="btn__signUp">Sign Up</button>
    </div>
  );
};
export default CTA;
