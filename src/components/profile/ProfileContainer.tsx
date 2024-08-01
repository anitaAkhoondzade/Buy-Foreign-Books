import { Outlet } from "react-router-dom";
import Header from "../app/Header";

export default function ProfileContainer() {
  return (
    <div>
      <Header/>
      <div className="px-5">

      <Outlet/>
      </div>
    </div>
  )
}
