import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./Layout"
import ContactPage from "./pages/ContactPage"
import StudServices from "./pages/StudServices"
import Finance from "./pages/Finance"
import GearPage from "./pages/GearPage"
import OurProgram from "./pages/OurProgram"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/contacts" element={ <ContactPage/>} />
        <Route path="/stud-services" element={ <StudServices/>} />
        <Route path="/finance" element={ <Finance/>} />
        <Route path="/gear" element={ <GearPage/>} />
        <Route path="/programs" element={ <OurProgram/>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>)
}

export default App