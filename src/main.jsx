import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: () => fetch('http://localhost:5000/coffees')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee/>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee/>,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
