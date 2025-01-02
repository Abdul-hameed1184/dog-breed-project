import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Form from "./components/Form"
import Hr from './components/Hr'

const Layout = () => {
  return (
      <>
          <NavBar />
      <Outlet />
      <Hr/>
      <Form/>
      </>
  )
}

export default Layout