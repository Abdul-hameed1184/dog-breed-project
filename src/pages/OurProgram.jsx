import Contact from "../components/Contact";
import ProgramGrid from "../components/ProgramGrid";
import ProgramPics from "../components/ProgramPics";

const OurProgram = () => {
  return (
    <div className="program">
      <div className="route">You are here: Our programs</div>
      <div className="cover">
        <img src="/images/program1.jpg" alt="" />
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
