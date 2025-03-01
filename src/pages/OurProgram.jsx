import Contact from "../components/Contact";
import ProgramGrid from "../components/ProgramGrid";
import ProgramPics from "../components/ProgramPics";
import { Helmet } from "react-helmet";

const OurProgram = () => {
  return (
    <div className="program">
      <Helmet>
        <title>Our Programs</title>
        <meta name="description" content="Our Programs" />
      </Helmet>
      <div className="route">You are here: Our programs</div>
      <div className="cover">
        <img src="/images/Dogbreed2.jpg" alt="" />
      </div>
      <div className="container">
        <ProgramGrid />
        <Contact />
        <ProgramPics />
      </div>
    </div>
  );
};

export default OurProgram;
