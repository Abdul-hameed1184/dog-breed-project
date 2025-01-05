import { useState } from "react";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    let input = e.target.value;
    // Remove non-numeric characters
    input = input.replace(/[^0-9]/g, "");

    // Format the input to ####-###-####
    if (input.length <= 4) {
      input = input;
    } else if (input.length <= 7) {
      input = `${input.slice(0, 4)}-${input.slice(4)}`;
    } else {
      input = `${input.slice(0, 4)}-${input.slice(4, 7)}-${input.slice(7, 11)}`;
    }

    setPhoneNumber(input);
  };

  return (
    <div className="contact">
      <h3>Designer French Bulldogs Contact</h3>
      <h6>
        Contact us for more information about upcoming litters of French
        Bulldogs from Designer French Bulldogs.
      </h6>
      <hr />
      <form>
        <div className="details">
          <label>
            Name <span>*</span>
          </label>
          <div className="name">
            <section>
              <input type="text" />
              <label htmlFor="text"> First</label>
            </section>

            <section>
              <input type="text" />
              <label htmlFor="text"> Last</label>
            </section>
          </div>

          <div className="email">
            <label>
              Email <span>*</span>
            </label>
            <input type="email" />
          </div>
          <p>
            What color French Bulldog are you interested in? If you are
            interested in a particular puppy you saw on our website or Social
            Media, please let us know in the additional info box below
            <span>*</span>
          </p>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color"> Any Color</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Stud Service</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Black and Tan</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Brindle</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Blue</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Blue and tan</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Tri Color</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color"> Blue brindle</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Lilac brindle</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Lilac</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color"> Lilac and tan</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color"> Tan</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Fawn</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Merle</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Lilac Merle</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Blue Merle</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Isabella</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Isabella Merle</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Isabella tan</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">New Shade Isabella</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Fluffy</label>
          </div>
          <div>
            <input type="checkbox" name="Any color" />
            <label htmlFor="Any color">Big Rope</label>
          </div>
        </div>
        <div className="text">
          <label>Please let us know what you are most interested in:</label>
          <textarea></textarea>
        </div>

        <div className="phone-number-form">
          <label htmlFor="phone-number">
            Phone Number <span>*</span>
          </label>
          <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            onChange={handleInputChange}
            maxLength="14" // Length includes the dashes
            placeholder="####-###-####"
          />
        </div>
        <div className="drop-down">
          <p>Would you like to be added to the waiting list?</p>
          <select name="waitList" id="waitList">
            <option value=""></option>
            <option value="Yes">YES</option>
            <option value="No">NO</option>
          </select>
        </div>
        <div className="radio">
          <p>
            Would you like to place a deposit now to get in-line on our puppy
            waiting list? Deposit is $1000.00 and goes towards final price of
            puppy.
          </p>
          <label>
            <input type="radio" name="option" value="yes" />
            <span>Yes</span>
          </label>
          <br />
          <label>
            <input type="radio" name="option" value="no" />
            <span>Not at this time</span>
          </label>
        </div>
        <div className="check2">
          <p>
            Stay up-to-date with puppy announcements and more from Designer
            French Bulldogs!
          </p>
          <label>
            <input type="radio" name="check2" value="yes" />
           <span>Yes</span>
          </label>
          <br />
          <label>
            <input type="radio" name="check2" value="no" />
             <span>No</span>
          </label>
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
        <p className="captcha">
          This site is protected by reCAPTCHA Enterprise and the Google Privacy
          Policy and Terms of Service apply.
        </p>
      </form>
    </div>
  );
};

export default Contact;
