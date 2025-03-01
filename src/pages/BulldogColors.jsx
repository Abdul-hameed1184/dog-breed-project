import ColorsGrid from "../components/ColorsGrid";
import { Helmet } from "react-helmet";

const BulldogColors = () => {
  return (
    <div className="bulldogColors">
      <Helmet>
        <title>French Bulldog colors</title>
        <meta name="description" content="French Bulldog colors" />
      </Helmet>
      <div className="route">You are here : French Bulldog colors</div>
      <div className="cover">
        <img src="/images/Dogbreed3.jpg" alt="" />
      </div>
      <ColorsGrid />
    </div>
  );
};

export default BulldogColors;
