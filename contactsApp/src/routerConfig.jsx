import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EditPage from "./EditPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <div className="text-center">404 PAGE NOT FOUND</div>,
  },
  {
    path: "edit/:id",
    element: <EditPage />,
    errorElement: <div className="text-center">404 PAGE NOT FOUND</div>,
  },
]);
