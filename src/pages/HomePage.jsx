import { IoIosShareAlt } from "react-icons/io";
import HomeCard from "../components/HomeCard";
import HomeCard2 from "../components/HomeCard2";
import HomeCard3 from "../components/HomeCard3";
import HomeCard4 from "../components/HomeCard4";
import HomeCard5 from "../components/HomeCard5";
import HomeCard6 from "../components/HomeCard6";
import HomeGrid1 from "../components/HomeGrid1";
import HomeGrid2 from "../components/HomeGrid2";
import HomeGrid3 from "../components/HomeGrid3";
import HomeGrid4 from "../components/HomeGrid4";
import HomeGrid5 from "../components/HomeGrid5";
import HomeGrid6 from "../components/HomeGrid6";
import HomeGrid7 from "../components/HomeGrid7";
import HomeGrid8 from "../components/HomeGrid8";
const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="route">You are here: Home</div>

        <div className="container">
        <img src="/images/Dogbreed1.jpg" width="400" height="400" />
          <div className="write-up">
            <h1>SOUTHEAST ELITE FRENCHIES BULLDOGS</h1>
            <p className="first-p">
            Welcome to the home of the finest SouthEast Elite Frenchies Bulldog puppies in the United States! Find your 
            perfect companion with the #1 SouthEast Elite Frenchies breeder, 
            renowned for health, premium DNA, and exceptional structure. Our Frenchie puppies can
            be delivered anywhere in the USA by our dedicated puppy nanny,  or you’re welcome to visit us in person.
            </p>
            <p className="first-p">
            Our French Bulldog puppies are short, stout, compact dogs that truly represent the French Bulldog breed type. We are pet-first breeders, 
            and this means no kennels, no overbreeding, and lots of love for this amazing breed. We have Frenchies in every color imaginable, 
            from classic to rare colors such as lilac, blue, Isabella, Rojo, all types of Merle, and many, many more.
            </p>
            {/* <img
              src="/images/french-bulldogs-for-sale-534-1.jpg"
              alt=""
              className="mid"
            /> */}
          
            <h1>AKC FRENCHIE PUPPIES </h1>
            <p className="linkup">
            Lyla and Showtime have given birth to an incredible litter of five males! We are now accepting reservations for our stunning lilac and lilac
             merle French Bulldog puppies. A $1,000 reservation fee secures your pick, 
            and they can be reserved through our Available Frenchie Puppies section.
            </p>
            <h1>SOUTHEAST FRENCH BULLDOG </h1>
            <p>
            Our SouthEast French Bulldog puppies have a full-time "puppy nanny" to deliver your puppy to you wherever you are in the USA when your puppy is ready to go home. With us, you are not going to have to settle for less on health and quality just to work with someone locally. Our goal within our breeding program is to create compactly muscular, correctly structured French Bulldogs.
            </p>
            <p>
            Our puppies are from only the best bloodlines, thick, compact, and dense as can be. You can opt to pick up your Frenchie personally or have them delivered to your nearest airport through our professional puppy nanny service. Yes, our pups travel not only across the USA but also to Canada and internationally; it's really very affordable and easy to arrange. This is a very important step in choosing your French Bulldog puppy: choosing the best quality over convenience.
            </p>
            <h1>AKC FRENCHIE PUPPIES </h1>
            <p>
            At SouthEast, perfection of what we believe to be the ideal breed standard is our committed passion. From over 15 years of selective breeding, we have developed some of the finest AKC bloodlines in the United States-a result of passion and precision.
            </p>
            <p>
            Our main priority is to breed outstanding French Bulldogs. Our puppies have larger heads, short thick legs, compact and solid bodies, and shorter backs. We also focus on symmetrical ropes-the folds over the nose-properly constructed ears, and very cute flat profiles. It is never easy to find the perfect puppy, let alone a bulldog, which is why we're here to make it as smooth and gratifying as possible for you.
            </p>
          </div>
          <div className="cards">
            <HomeCard />
            <HomeCard2 />
            <HomeCard3 />
            <HomeCard4 />
            <HomeCard5 />
            <HomeCard6 />
          </div>
          <div className="grids">
            <HomeGrid1 />
            <HomeGrid2 />
            <HomeGrid3 />
            <HomeGrid4 />
            <HomeGrid5 />
            <HomeGrid6 />
            <HomeGrid7 />
            <HomeGrid8 />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
