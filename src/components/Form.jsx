import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="form">
      <h4>FIND OUT WHEN WE ARE EXPECTING PUPPIES</h4>
      <form>
        <input type="text" placeholder="E-Mail:*" />
        <button>Submit</button>
      </form>
      <h4>{`AMERICA'S`} BEST BREEDERS</h4>
      <p>
        SouthEast Elite Frenchies is a family-operated French Bulldog breeding program
        committed to top AKC bloodlines. Buying your new family member from a
        breeder who focuses on health, temperament, and genetics rather than a
        hobby breeder or puppy mill is an investment in quality. If the price is
        the only thing that matters and health or breed quality is not
        important, then we are probably not the breeder for you.
      </p>
      <p>
        If you’re looking for a well-structured, quality pup, it's important to
        be selective. The breed has become so varied that some pups no longer
        resemble true French Bulldogs. Our pups are “thick-boned” with features
        reminiscent of English Bulldogs—adorable wrinkles, strong builds, and
        excellent structure.
      </p>
      <p>
        We breed for shorter-bodied and -legged Frenchies, avoiding the
        long-legged variations. Our puppies come with flat faces, perfect ropes,
        and well-set ears. You will not find any pups with long noses, tails, or
        lanky necks in our program. We are able to safely deliver your pup to
        anywhere in the USA, right to your local airport, thanks to our
        dedicated puppy nanny.
      </p>
      <p>
        Our puppies are all raised in our home with our children, so they are
        very socialized. Each pup is playful, intelligent, curious, and
        affectionate-a true Snuggle Bug. Our unique whelping process sets them
        up for success. By six weeks, our puppies will be pee-pad trained, which
        makes housebreaking much easier than other breeders.
      </p>
      <p>
        Unlike many breeders, we have an on-site animal biologist with a
        genetics background, consistently improving our program. This strong
        focus on genetics and bloodline health allows us to continually enhance
        the breed. We would like to thank you for trusting SouthEast Elite Frenchies!
      </p>
      <ul>
        <h3>SOUTHEAST FRENCH LINK</h3>
        <li>
          <Link to={"/available-puppies"}>Available puppies</Link>
        </li>
        <li>
          <Link to={"/programs"}>About our Breeders program</Link>
        </li>
        <li>
          <Link to={"/finance"}>Finance your puppies</Link>
        </li>
        <li>
          <Link>Privacy policies</Link>
        </li>
        <li>
          <Link>Health guarantees</Link>
        </li>
        <li>
          <Link>Terms and condition</Link>
        </li>
      </ul>
    </div>
  );
};

export default Form;
