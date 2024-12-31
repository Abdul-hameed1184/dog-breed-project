import ProgramGrid from "../components/ProgramGrid"

const OurProgram = () => {
  return (
      <div className="program">
          <div className="route">
              You are here: Our programs
          </div>
          <div className="cover">
              <img src="src/assets/images/program1.jpg" alt="" />
          </div>
          <div className="container">
              <ProgramGrid/>
          </div>
    </div>
  )
}

export default OurProgram
