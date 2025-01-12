import AvailablePics from "../components/AvailablePics";
import Contact from "../components/Contact";
import AvailableGrid from "../components/AvailableGrid";

const AvailablePuppies = () => {
  return (
    <div className="availablePuppies">
      <div className="route">You are here : Available Puppies</div>
      <div className="container">
        <img src="/images/french-bulldogs-for-sale-534-1.jpg" alt="" />
        <div className="write-up">
          <h1>FRENCHIE PUPPIES FOR SALE</h1>
          <p>
            Below you will see all of our available Frenchie puppies for sale.
            These pups are available if they still say “in stock”. Reserving
            your pup will take them “out of stock” immediately. Reservations are
            $1000.00 towards the final cost of the puppy which is notated on
            that puppies page which can be found by clicking their photo. Our
            Frenchies for sale sell quickly once posted as available so please
            reserve your puppy once you decide he or she is perfect for you!
          </p>
          <h1>FRENCHIES FOR SALE</h1>
          <p>
            You do not have to settle for a lesser quality puppy by limiting
            yourself to your local area! Our puppies are available to fly
            anywhere in the USA or Canada if you do not wish to pick up.
          </p>
          <p>
            SouthEast French Bulldog puppies for sale has a dedicated puppy nanny
            that will fly your pup “in cabin” to the local airport of your
            choice. If you have a question regarding a puppy, our program, or
            about getting on our waiting list for a different litter, please
            call, text 808-430-4156 or Southeastelitefrenchies@gmail.com.
          </p>
        </div>
        <Contact />
        <img src="/images/Dogbreed1.jpg" alt="" className="available2" />
        <AvailablePics />
        <AvailableGrid />
      </div>
    </div>
  );
};

export default AvailablePuppies;
