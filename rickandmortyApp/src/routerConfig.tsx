import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import ErrorPage from "./pages/ErrorPage";
import CharacterDetail from "./pages/CharacterDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "character/:id",
        element: <CharacterDetail />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "episodes",
        element: <Episodes />,
      },
    ],
  },
]);
