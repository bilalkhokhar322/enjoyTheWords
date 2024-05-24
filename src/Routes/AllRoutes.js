import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../Pages/Auth/SignIn")),
    isPublic: true,
    theme: "dark",
    exact: true,
  },
  {
    path: "/dashboard",
    component: lazy(() => import("../Pages/Dashboard/Index.jsx")),
    isPublic: false,
    theme: "dark",
    exact: true,
  },
  {
    path: "/permissions",
    component: lazy(() => import("../Pages/Permissions/Index.jsx")),
    isPublic: false,
    theme: "dark",
    exact: true,
  },
  {
    path: "/management",
    component: lazy(() => import("../Pages/Management/Index.jsx")),
    isPublic: false,
    theme: "dark",
    exact: false,
  },
  {
    path: "/user",
    component: lazy(() => import("../Pages/User/Index.jsx")),
    isPublic: false,
    theme: "dark",
    exact: true,
  },
  {
    path: "/userLogs",
    component: lazy(() => import("../Pages/usersLogs/Index.jsx")),
    isPublic: false,
    theme: "dark",
    exact: true,
  },
  {
    path: "/uploadLogo",
    component: lazy(() => import("../Pages/uploadLogo/Index.jsx")),
    isPublic: false,
    theme: "dark",
    exact: true,
  },
];

export default routes;
