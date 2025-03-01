import AvailableGrid from "../components/AvailableGrid";
import AvailablePics from "../components/AvailablePics";
import React from "react";
import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <div className="faq">
      <Helmet>
        <title>FAQs</title>
        <meta name="description" content="FAQs" />
      </Helmet>
      <div className="route">You are here: FAQs</div>
      <div className="cover">
        <img src="" alt="cover img" />
      </div>
      <div className="write-up">
        <h1>FREQUENTLY SKED QUESTION</h1>
        <p>Q. What are your puppy prices starting at?</p>
        <p>
          A. Depends on color. Most common colors start around $5500.00 and go
          up from there for rarer or super rare, crazy colors. Also, for animals
          being sold with show/AKC breeding rights, certain breedings / parents
          DNA combinations will be more expensive
        </p>
        <p>Q. I am on a budget, whatis your most affordable colors?</p>
        <p>
          A. Long time breeders, improving the breed with each pairing, we do
          not breed the lower level colors like brindle, pied or fawn. We rarely
          have black. The least expensive colors will be blue, blue merle,
          lilac, lilac merle, Isabella with prices increasing from there.
        </p>
        <p>
          Our main productions are Blue, Lilac, Isabella, Rojo, Chocolate, New
          Shade etc. From time to time, we will have a cocoa or a black puppy as
          well.
        </p>
        <p>
          Why are Frenchies so much more expensive than most any other breed?
        </p>
        <p>
          Please consider why these dogs are some of the most expensive of all
          breeds. They have 10,000.00 PER litter in Reproductive Vet expenses.
          These include: C-Section, Artificial Insem, Progesterone Testing, Stud
          Fees, etc. So if a Dam has 4 puppies they already COST the breeder
          $2500.00 before they pay for dad, mom, or anything else plus their
          time.
        </p>
        <p>
          Q. Whatis itthat makes your puppies differentfrom the ones I see from
          puppy mills and the hobby breeders-on websites like puppy finder sites
          etc?
        </p>
        <p>
          A. This is a long answer. So the short version is: Heath – All of our
          breed stock and their grandparents and most often great grandparents
          are 4-6 panel 270+ point DNA health CLEAR. Our puppies will also look
          very different than most hobby or puppy mill breeders.
        </p>
        <p>
          How includes quite a bit. The Rope, The side profile is flat, not
          concave like some that have breathing issues. Our Pups ears are
          centered and perfectly shaped. They will have short legs, short back,
          little to no tail. Our pups are well muscled, thick and dense. A lot
          of bone yet compact like a little nugget.
        </p>
        <p>
          Q. I am ready to reserve a Frenchie from SouthEast Elite Frenchies Bulldogs. How
          do I complete reservation?
        </p>
        <p>
          A. Easy! Please go to our deposit page and place your deposit. In the
          special notes we ask that you give us your top 3-4 color options as
          well as male or female. For example: "Blue and Tan Merle Boy, Isabella
          and Tan Boy, Lilac and Tan Boy "
        </p>
        <p>Q. At what age do your puppies go home?</p>
        <p>
          A. We vaccinate our puppies at 6 weeks of age, as well as deworm them
          with a broad spectrum dewormer. They are ready to go home any time
          after 8 weeks since they were born.
        </p>
        <p>Q. Do you sell your puppies outside of the USA?</p>
        <p>
          A. Yes! We have sent puppies all over the world, from Canada to Europe
          to Australia!
        </p>
        <p>
          Q. Do you keep your puppies in cages like most breeders, so they are
          difficultto house break/potty train?
        </p>
        <p>
          A. No! Here at DFB 100% of our puppies are pee pad trained before they
          leave. We raise them in their whelping pen with a separate area
          attached with pee pads. By age 6 weeks 100% of them are pooping on the
          pads and by week 8 just about all of them are also using them for Pee!
          This is a LOT more work on us a breeders but we feel as it is so
          important for their future forever families.
        </p>
        <p>
          Q. Whatis process from reservation forward to receiving our puppy?
        </p>
        <p>
          A. Once you reserve your puppy we begin sending pictures once puppy is
          2 weeks or older at least once per week but often much more. Once
          puppy is 4-5 weeks we plan on either delivering the puppy to you OR
          making plans to meet you at airport or locally.
        </p>
        <p>Q. I live in another state is that ok?</p>
        <p>
          A. Absolutely! We have a full-time, dedicated puppy nanny named Ray.
          Ray will fly or drive to you, whichever makes more sense, and
          hand-deliver your puppy. We do not send our pups on planes in "pet
          cargo"for fear of them being stolen, so we hand-deliver every puppy or
          meet them at a local airport or even locally if driving.
        </p>
        <p>
          Q. Does SouthEast Elite Frenchies Frenchies do anything differently to help with food
          aggression or resource guarding in the firstfew weeks a puppy is
          eating without mom?
        </p>
        <p>
          A. Yes! We feed all of our puppies in the same round puppy feeding
          dishes. This would mean they have to share. If someone has an attitude
          even at 5 weeks of age over sharing meals, we give that pup a quick
          butt"flick" until they realize sharing is caring. We are well aware
          that even small Frenchies are still" bulldogs".
        </p>
        <p>
          There is nothing worse than having young ones at home and constantly
          worrying about resource guarding. While our method is not complete, it
          certainly starts them off on the right path toward enjoying food and
          high-value toys and treats without aggressiveness towards humans or
          siblings around them.
        </p>

        <p className="center">
          Past Puppies from the best French Bulldog breeding program in the USA!
        </p>

        <AvailablePics />
        <AvailableGrid />
      </div>
    </div>
  );
};

export default FAQ;
