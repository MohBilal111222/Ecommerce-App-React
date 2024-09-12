import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function Layout() {
  return (
    <div className="layoutno">
<h1 className="tags">Saylani Outlet</h1>

      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout










