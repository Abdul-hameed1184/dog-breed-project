import PuppiesGrid from "../components/PuppiesGrid";
import { Helmet } from "react-helmet"

const Puppies = () => {
  return (
    <div className="puppies">
      <Helmet>
        <title>Puppies for Sale</title>
        <meta name="description" content="Puppies for Sale" />
      </Helmet>
      <div className="route">You are here: Frenches Puppies for sale</div>
      <div className="cover">
        <img src="/images/Dogbreed7.jpg" alt="" />
      </div>
      <div className="container">
        <PuppiesGrid />
      </div>
    </div>
  );
}

export default Puppies
