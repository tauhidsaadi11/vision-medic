import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Maintenance from "./views/Maintenance";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/edit-user-profile",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/draft",
    layout: DefaultLayout,
    component: Maintenance
  },
  {
    path: "/pengaturan",
    layout: DefaultLayout,
    component: Maintenance
  },
  {
    path: "/ditandai",
    layout: DefaultLayout,
    component: Maintenance
  },
  {
    path: "/telah-diagnosa",
    layout: DefaultLayout,
    component: Maintenance
  },
  {
    path: "/telah-dilihat",
    layout: DefaultLayout,
    component: Maintenance
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: Maintenance
  },
  {
    path: "/edit-user-profile",
    layout: DefaultLayout,
    component: Maintenance
  }
];
