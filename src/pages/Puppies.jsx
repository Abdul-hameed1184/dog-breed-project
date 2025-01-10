import PuppiesGrid from "../components/PuppiesGrid";

const Puppies = () => {
  return (
    <div className="puppies">
      <div className="route">You are here: Frenches Puppies for sale</div>
      <div className="cover">
        <img src="images/colors14.jpg" alt="" />
      </div>
          <div className="container">
              <PuppiesGrid/>
      </div>
    </div>
  );
}

export default Puppies
