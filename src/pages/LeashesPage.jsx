import LeashGrid from "../components/LeashGrid";
import { Helmet } from "react-helmet"

const LeashesPage = () => {
  return (
    <div className="leashPages">
      <Helmet>
        <title>French Bulldogs Leash and Harness</title>
        <meta name="description" content="French Bulldogs Leash and Harness" />
      </Helmet>
      <div className="route">You are here: French leash and harness</div>

      <div className="content">
        <LeashGrid/>
      </div>
    </div>
  );
}

export default LeashesPage
