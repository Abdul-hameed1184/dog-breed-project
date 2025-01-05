import ColorsGrid from "../components/ColorsGrid";

const BulldogColors = () => {
  return (
    <div className="bulldogColors">
      <div className="route">You are here : French Bulldog colors</div>
      <div className="cover">
        <img src="/images/colors1.jpg" alt="" />
      </div>
      <ColorsGrid />
    </div>
  );
};

export default BulldogColors;
