import LeashCard from "./LeashCard";

const LeashGrid = () => {
  return (
    <div className="leashGrid">
      <div className="left">
        <h1>FRENCH BULLDOG LEASHES & HARNESSES</h1>
        <LeashCard />

        <h3>Full Selection of French bulldog Harness for sale</h3>
        <p>
          Check out our full selection of French bulldog leash for sale as well
          as French bulldog harness for sale.
        </p>
        <p>
          Also, if you’re a French Bulldog Breeder be sure to check out our
          Frenchie Stud Service!
        </p>
        <LeashCard />
      </div>
      <div className="right">
        <img src="/images/Dogbreed1.jpg" alt="" />
        <img src="/images/Dogbreed2.jpg" alt="" />
        <img src="/images/Dogbreed3.jpg" alt="" />
        <img src="/images/Dogbreed4.jpg" alt="" />
        <img src="/images/Dogbreed5.jpg" alt="" />
       
      </div>
    </div>
  );
};

export default LeashGrid;
