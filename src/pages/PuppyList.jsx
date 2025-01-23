import Contact from "../components/Contact";

const PuppyList = () => {
  return (
    <div className="puppyList">
      <div className="route">
        You are here: french bulldog puppy waitlist
      </div>
      {/* <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
      </div>
      <div className="container">
        <h1>FRENCH BULLDOG PUPIES FOR SALE </h1>
        <p>
          Litter News: Check here to see our currently Available Frenchie
          Puppies! If you would like to reserve a spot for a future litter you
          can also join our Waiting list below
        </p>
        * <Contact /> 
      </div> */}
      <ul>
        <p>
          Q: I’ve decided I want a SouthEast Elite French Bulldogs lines puppy, what is
          the next steps?
        </p>
        <li>
          1. First check and see if we have listed any French Bulldog puppies
          available here.
        </li>
        <li>
          2. If you are interested in one of our pups, which are normally all
          sold before they are 4 weeks old, PLEASE call and/or text Rocky 808-430-4156
        </li>
        <li>
          3. Deposits (1000.00) are taken to reserve a puppy. We accept Credit
          card direct on our website, Check, Zelle, Cash, Paypal or Cash app for
          the deposit only. The balance paid before pup leaves can be paid via
          wire, ach, cashiers or bank check, or money order.
        </li>
      </ul>
      <div className="write-up2">
        <p>
          Unfortunately, we receive a ton of spam calls, so leaving us a VM or
          texting to setup a call works best if we do not answer! Our pups fly
          anywhere in USA. SouthEast Elite French Bulldog pups from our lines are in
          high demand from our existing customers who always want a second, so
          placing a deposit on a future litter or new born puppy is recommended
          as soon as you make your decision. On any given day we can get up to
          20 emails and/or Facebook and Instagram messages so we have to remind
          everyone “the puppy is available until there is a deposit made”.
        </p>
        <p>
          Once you have decided you would like to purchase one of our amazing
          pups, please fill call, text or email us at SouthEast EliteFrenchAbulls AT
          Gmail.com or using our contact form.
        </p>
        <img src="/images/Dogbreed2.jpg" alt="" />
        <h2>✈️ Our Frenchie pups fly anywhere in USA! ✈️</h2>
        <img src="/images/Dogbreed3.jpg" alt="" />
        <p>
          SouthEast Elite French Bulldogs is a family run French Bulldog Breeder
          working with top AKC bloodlines. Our Frenchies are “thick boned, and
          English Bulldog Esque” in cuteness, wrinkles and structure. There is
          such variation these days in the quality and structure of the dog
          itself that we see some French bulldogs for sale that look more like
          Boston Terriers, long legged, skinny bone structure, projected snouts,
          little to no sub cut fat wrinkles etc. When you purchase from us, you
          are purchasing what we believe a Frenchie should be in genetics,
          looks, health and temperament.
        </p>
      </div>
      <div className="cover2">
        <h1>Find out when we are expecting more Frenchie Puppies!</h1>
        <form>
          <input type="text" placeholder="Name*" />
          <input type="text" placeholder="Email*" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default PuppyList;
