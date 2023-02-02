import { createBrowserRouter } from "react-router-dom";
import AddHotel from "../components/dashBoard/AddHotel";
import BookingList from "../components/dashBoard/BookingList";
import DashboardHotel from "../components/dashBoard/DashboardHotel";
import MakeAdmin from "../components/dashBoard/MakeAdmin";
import UpdateHotel from "../components/dashBoard/UpdateHotel";
import UserList from "../components/dashBoard/UserList";
import PaymentForm from "../components/PaymentForm/PaymentForm";
import Profile from "../components/Profile/Profile";
import Success from "../components/reusable/Success";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/home/Home";
import Hotel from "../pages/hotel/Hotel";
import RoomBooking from "../pages/hotel/RoomBooking";
import HotelList from "../pages/HotelList";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Service from "../pages/Service";
import Signup from "../pages/Signup";
import AdminRoute from "../utils/AdminRoute";
import PrivateRoute from "../utils/PrivateRoute.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/hotels/hotel/:id",
        element: <Hotel />,
      },
      {
        path: "/hotels",
        element: <HotelList />,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <RoomBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "/success",
        element: <Success />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHotel />,
      },
      {
        path: "add-hotel",
        element: (
          <AdminRoute>
            <AddHotel />
          </AdminRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <AdminRoute>
            <BookingList />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <UserList />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/hotel/:id",
        element: <UpdateHotel />,
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
