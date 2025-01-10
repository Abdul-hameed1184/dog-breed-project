import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Form from "./components/Form"
import Hr from './components/Hr'
import MobileNav from "./components/MobileNav"

const Layout = () => {
  return (
      <>
      <NavBar />
      <MobileNav/>
      <Outlet classname='outlet'/>
      <Hr/>
      <Form/>
      </>
  )
}

export default Layout