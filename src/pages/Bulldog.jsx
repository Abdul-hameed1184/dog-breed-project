import BulldogGrid from "../components/BulldogGrid"
import { Helmet } from "react-helmet" 


const Bulldog = () => {
  return (
    <div className='bulldog'>
      <Helmet>
        <title>Bulldogs for Sale</title>
        <meta name="description" content="Bulldogs for Sale" />
        </Helmet>
      <div className="route">
        You are here: bulldogs for sale
      </div>
      
      <BulldogGrid/>
    </div>
  )
}

export default Bulldog
