import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Painting from "../pages/Services/painting";
import Signup from "../components/Signup";
import UpProfile from "../pages/dashboard/UpProfile";
import Electrician from "../pages/Services/electrician";
import Plumbing from "../pages/Services/plumbing";
import Cleaning from "../pages/Services/cleaning";
import Cart from "../pages/Cart/Cart";
import DashboardLayout from "../layout/DashboardLayout";
import Privaterouter from "../PrivateRouter/Private";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/painting",
        element: <Painting />,
      },

      {
        path: "/electrician",
        element: <Electrician />,
      },

      {
        path: "/plumbing",
        element: <Plumbing />,
      },

      {
        path: "/cleaning",
        element: <Cleaning />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/update-profile",
        element: <UpProfile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: (
      <Privaterouter>
        <DashboardLayout />
      </Privaterouter>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
export default router;