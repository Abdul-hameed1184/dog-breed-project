import Contact from "../components/Contact";
import React from "react";
import { Helmet } from "react-helmet";  

const ContactPage = () => {
  return (
    <div className="contactPage">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
      </Helmet>
      <div className="route">You are here: contact </div>
      <div className="container">
        <img src="/images/Dogbreed1.jpg" alt="" />
        <div className="write-up">
          <h2> Southeast Elite French Bulldogs</h2>
          <p>Call, Text or Email :808-430-4156 or southeastelitefrenchies@gmail.com.</p>
          <h3>Specializing in Amazing French bulldog puppies for sale</h3>
          <p>
          Welcome to the quality-conscious French Bulldog breeder of the utmost premium genetics for structure, temperament, and above all, healthy puppies. The nicest quality AKC pets and future AKC show-stopping Frenchies are available right here at DesignerFrenchBulldogs.com.

          </p>
          <p>
          Our males/sires are from the Goober and Mr. Banks lines, one of-if not the nicest, best-built, smallest, most compact but thick and strong builds of any AKC Frenchie line you will find. When buying any Frenchie puppies for sale from us, expect only the best quality you can find anywhere.
          </p>
          <div className="images">
            <img src="/images/Dogbreed2.jpg" alt="" />
            <img src="/images/Dogbreed3.jpg" alt="" />
            <img src="/images/Dogbreed4.jpg" alt="" />
            <img src="/images/Dogbreed5.jpg" alt="" />
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
