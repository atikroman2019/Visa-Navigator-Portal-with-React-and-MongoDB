import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVisas from "../pages/AllVisas";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";
import AddVisa from "../pages/AddVisa";
import VisaDetails from "../pages/VisaDetails";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyApplications from "../pages/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-visas", element: <AllVisas /> },
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ),
      },
      {
        path: "/visa/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-added-visas",
        element: (
          <PrivateRoute>
            <MyAddedVisas />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
