import RareGrid from '../components/RareGrid';
import { Helmet } from 'react-helmet';

const RareColors = () => {
  return (
    <div className="rareFrenchies">
      <Helmet>
        <title>Rare Bulldog Colors</title>
        <meta name="description" content="Rare Bulldog Colors" />
        </Helmet>
      <div className="route">You are here : Rare Bulldog Colors</div>
      <div className="cover">
        <img src="/images/Dogbreed1.jpg" alt="" />
      </div>
      <RareGrid/>
    </div>
  );
}

export default RareColors
