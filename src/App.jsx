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
        <Route
          path="/stud-lock-in"
          element={<PreviewPage product="French Bulldog Stud Lock In" />}
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
