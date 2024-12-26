import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./Layout"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={ <HomePage/>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>)
}

export default App