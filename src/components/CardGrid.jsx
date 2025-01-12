import Card from "./Card"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"
import Hr from "./Hr"

const CardGrid = () => {
  return (
    <div className="cardGrid">
      <Hr/>
          <h2>Related Products</h2>
          <div className="grid">
          <Card/>
          <Card1/>
          <Card2/>
          <Card3/>
          </div>
         
    </div>
  )
}

export default CardGrid
