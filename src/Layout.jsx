import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function Layout() {
  return (
    <div className="layoutno">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout










