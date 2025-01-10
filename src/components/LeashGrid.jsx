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
        <img src="/images/leash1.jpg" alt="" />
        <img src="/images/leash2.jpg" alt="" />
        <img src="/images/leash3.jpg" alt="" />
        <img src="/images/leash4.jpg" alt="" />
        <img src="/images/leash5.jpg" alt="" />
        <img src="/images/leash6.jpg" alt="" />
        <img src="/images/leash7.jpg" alt="" />
        <img src="/images/leash8.jpg" alt="" />
        <img src="/images/leash9.jpg" alt="" />
        <img src="/images/leash10.jpg" alt="" />
        <img src="/images/leash11.jpg" alt="" />
        <img src="/images/leash12.jpg" alt="" />
      </div>
    </div>
  );
};

export default LeashGrid;
