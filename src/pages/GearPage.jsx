import GearGrid from "../components/GearGrid";

const GearPage = () => {
  return (
    <div className="gear">
      <div className="route">You are here: Blldog Clothes</div>
      <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
      </div>
      <div className="content">
        <GearGrid />
      </div>
    </div>
  );
};

export default GearPage;
