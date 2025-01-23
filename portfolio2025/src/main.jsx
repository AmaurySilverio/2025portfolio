import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/aboutMe",
    element: <AboutMe />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
