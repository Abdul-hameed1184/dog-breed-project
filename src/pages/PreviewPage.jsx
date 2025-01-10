import CardGrid from "../components/CardGrid"
import PreviewGrid from "../components/PreviewGrid"

const PreviewPage = ({ product }) => {
    const products = product
  return (
      <div className="previewPage">
          <div className="route">
              You are here : {location.pathname}
          </div>
          <PreviewGrid product={products} />
          <CardGrid/>
    </div>
  )
}

export default PreviewPage
