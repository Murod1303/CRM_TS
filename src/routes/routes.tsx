import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Statistic from "../pages/statistic/Statistic";
import Students from "../pages/student/Students";
import Groups from "../pages/group/Groups";
import Teachers from "../pages/teacher/Teachers";
import Subjects from "../pages/subject/Subjects";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Statistic />,
      },
      {
        path: "/student",
        element: <Students />,
      },
      {
        path: "/group",
        element: <Groups />,
      },
      {
        path: "/teacher",
        element: <Teachers />,
      },
      {
        path: "/subject",
        element: <Subjects />,
      },
    ],
  },
]);
