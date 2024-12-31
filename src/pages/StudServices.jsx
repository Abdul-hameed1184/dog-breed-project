import Form from "../components/Form";
import Hr from "../components/Hr";
import StudGrid1 from "../components/StudGrid1";
import StudGrid2 from "../components/StudGrid2";

const StudServices = () => {
  return (
      <div className="studServices">
          <div className="route">you are here: stud services</div>
      <div className="cover">
        <img
          src="src/assets/images/french-bulldog-stud-service-1-1.jpg.webp"
          alt=""
        />
      </div>
      <div className="write-up">
        <h1>FRENCHIE STUD SERVICE</h1>
        <p>
          At Designer French Bulldogs, the goal is to be among the finest
          breeders of French Bulldogs in the United States. That being said, how
          would that be possible? Without a doubt, there is definitely no short
          answer to such a question! First with some of the best of all the
          French Bulldog genetics on hand by way of our studs and dams, we offer
          top quality. Focus is first on structure, than temperament, and than
          lastly the rare French bulldog colors. Being a French bulldog breeder
          means much more than just having some puppies. There needs to be a
          plan in place years before you get to that point. If you are
          interested in locking in one of our Frenchie Stud Service dogs, please
          click here.
              </p>
              <StudGrid1 />
              <StudGrid2 />
              {/* <Hr /> */}
              <Form/>
      </div>
    </div>
  );
}

export default StudServices