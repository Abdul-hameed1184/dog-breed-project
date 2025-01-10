import Card from "./Card"
import Hr from "./Hr"

const CardGrid = () => {
  return (
    <div className="cardGrid">
      <Hr/>
          <h2>Related Products</h2>
          <div className="grid">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
         
    </div>
  )
}

export default CardGrid
