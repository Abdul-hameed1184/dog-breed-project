import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import ContactPage from "./pages/ContactPage";
import StudServices from "./pages/StudServices";
import Finance from "./pages/Finance";
import GearPage from "./pages/GearPage";
import OurProgram from "./pages/OurProgram";
import BulldogColors from "./pages/BulldogColors";
import AvailablePuppies from "./pages/AvailablePuppies";
import PuppyList from "./pages/PuppyList";
import FAQ from "./pages/FAQ";
import ReviewPage from "./pages/ReviewPage";
import LeashesPage from "./pages/LeashesPage";
import FrenchPrices from "./pages/FrenchPriices";
import PreviewPage from "./pages/PreviewPage";
import Puppies from "./pages/Puppies";
import Bulldog from "./pages/Bulldog";
import Frenchies from "./pages/Frenchies";
import CartPage from "./pages/CartPage";
import RareColors from "./pages/RareColors";
import Blue from "./pages/Blue";
import Merle from "./pages/Merle";
import Fluffy from "./pages/Fluffy";
import Isabella from "./pages/Isabella";
import Rojo from "./pages/Rojo";
import Platinum from "./pages/Platinum";
import Cream from "./pages/Cream";
import Chocolate from "./pages/Chocolate";
import Black from "./pages/Black";
import Lilac from "./pages/Lilac"
import Deposit from "./pages/Deposit";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/stud-services" element={<StudServices />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/gear" element={<GearPage />} />
        <Route path="/programs" element={<OurProgram />} />
        <Route path="/french-bulldog-colors" element={<BulldogColors />} />
        <Route path="/available-puppies" element={<AvailablePuppies />} />
        <Route path="/puppies-wait-list" element={<PuppyList />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/leashes" element={<LeashesPage />} />
        <Route path="/french-bulldog-prices" element={<FrenchPrices />} />
        <Route path="/baby-clothes-for-sale" element={<GearPage />} />
        <Route path="/puppy-for-sale" element={<Puppies/>} />
        <Route path="/bulldog-for-sale" element={<Bulldog/>} />
        <Route path="/frenchies-for-sale" element={<Frenchies/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/rare-french-bulldog-colors" element={<RareColors/>} />
        <Route path="/blue-bulldog-colors" element={<Blue/>} />
        <Route path="/merle-bulldog" element={<Merle/>} />
        <Route path="/fluffy-bulldog" element={<Fluffy/>} />
        <Route path="/isabella-bulldog" element={<Isabella/>} />
        <Route path="/black-bulldog" element={<Black/>} />
        <Route path="/chocolate-bulldog" element={<Chocolate/>} />
        <Route path="/cream-bulldog" element={<Cream/>} />
        <Route path="/platinum-bulldog" element={<Platinum/>} />
        <Route path="/rojo-bulldog" element={<Rojo/>} />
        <Route path="/lilac-bulldog" element={<Lilac/>} />
        <Route
          path="/stud-lock-in"
          element={<PreviewPage product="French Bulldog Stud Lock In" />}
        />
        <Route
          path="/future-litter"
          element={<Deposit/>}
        />
        <Route
          path="/rojo-tan-tricolor"
          element={
            <PreviewPage product="Goober Rojo Cherry Tan Tricolor Merle Stud Lock in" />
          }
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
