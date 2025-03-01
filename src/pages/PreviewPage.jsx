import CardGrid from "../components/CardGrid"
import PreviewGrid from "../components/PreviewGrid"
import { Helmet } from "react-helmet"

const PreviewPage = ({ product }) => {
    const products = product
  return (
      <div className="previewPage">
          <Helmet>
              <title>Preview Page</title>
              <meta name="description" content="Preview Page" />
          </Helmet>
          <div className="route">
              You are here : {location.pathname}
          </div>
          <PreviewGrid product={products} />
          <CardGrid/>
    </div>
  )
}

export default PreviewPage
