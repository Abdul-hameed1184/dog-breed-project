import LeashCard from "../components/LeashCard"
import ReviewGrid from "../components/ReviewGrid"

const ReviewPage = () => {
  return (
      <div className="reviewPage">
          <div className="route">
                <p>You are here: Southeast French Bulldog Review</p>
          </div>
          <ReviewGrid />
          <LeashCard/>


    </div>
  )
}

export default ReviewPage
