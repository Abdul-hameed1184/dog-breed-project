import LeashCard from "../components/LeashCard"
import ReviewGrid from "../components/ReviewGrid"
import { Helmet } from "react-helmet"

const ReviewPage = () => {
  return (
      <div className="reviewPage">
          <Helmet>
              <title>Southeast French Bulldog Review</title>
              <meta name="description" content="Southeast French Bulldog Review" />
          </Helmet>
          <div className="route">
                You are here: Southeast French Bulldog Review
          </div>
          <ReviewGrid />


    </div>
  )
}

export default ReviewPage
