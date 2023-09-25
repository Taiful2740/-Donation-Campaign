import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DetailsCard from "../Pages/DetailsCard/DetailsCard";
import Statistics from "../Pages/Statistics/Statistics";

const myCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/allCards/:id",
        element: <DetailsCard></DetailsCard>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default myCreateRoute;
