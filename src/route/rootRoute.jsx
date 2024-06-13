import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import NewProjects from "../components/work/NewProjects";
import AllProjects from "../components/work/AllProjects";
import WorkingOn from "../components/work/WorkingOn";
import Home from "../components/home/Home";
import Contact from "../components/contact/Contact";
import Projects from "../components/work/Projects";
import Root from "../components/layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "recent_projects",
        element: <NewProjects></NewProjects>,
      },
      {
        path: "all_projects",
        element: <AllProjects></AllProjects>,
      },
      {
        path: "working_on",
        element: <WorkingOn></WorkingOn>,
      },
    ],
  },
]);
