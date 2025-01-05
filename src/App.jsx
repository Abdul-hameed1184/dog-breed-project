import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./Layout"
import ContactPage from "./pages/ContactPage"
import StudServices from "./pages/StudServices"
import Finance from "./pages/Finance"
import GearPage from "./pages/GearPage"
import OurProgram from "./pages/OurProgram"
import BulldogColors from "./pages/BulldogColors"
import BulldogPuppies from "./pages/BulldogPuppies"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/contacts" element={ <ContactPage/>} />
        <Route path="/stud-services" element={ <StudServices/>} />
        <Route path="/finance" element={ <Finance/>} />
        <Route path="/gear" element={ <GearPage/>} />
        <Route path="/programs" element={ <OurProgram/>} />
        <Route path="/french-bulldog-colors" element={ <BulldogColors/>} />
        <Route path="/bulldog-puppies" element={<BulldogPuppies />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>)
}

export default App