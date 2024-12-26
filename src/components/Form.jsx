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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        laudantium voluptate quidem eveniet repellendus architecto, eius fugit
        nulla at aspernatur. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Earum dolorum eum natus impedit vel vero, quod iure eos. Soluta,
        debitis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos adipisci
        numquam a doloremque aspernatur? Doloremque fugit quia voluptas, est
        accusantium deserunt illo odio omnis non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
        perspiciatis est esse excepturi? Eveniet dignissimos similique nesciunt
        provident architecto? Quisquam, magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aperiam voluptas voluptate quis sequi ducimus et impedit beatae non omnis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        ratione hic omnis ab odio dolorum at nostrum, velit adipisci tempora sed
        voluptatum voluptate voluptas aut rerum totam error. Debitis placeat,
        perferendis dolorum illo ea laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quasi ut ab laboriosam consequuntur maxime.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius accusamus
        officia quos. Quam aperiam repellendus consectetur molestiae distinctio
        explicabo aliquid? Omnis fugit temporibus quas incidunt sunt, quaerat
        dignissimos magni rem.
      </p>
      <ul>
        <h3>SOUTHEAST FRENCH LINK</h3>
        <li>
          <Link>Available puppies</Link>
        </li>
        <li>
          <Link>About our Breeders program</Link>
        </li>
        <li>
          <Link>Finance your puppies</Link>
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
