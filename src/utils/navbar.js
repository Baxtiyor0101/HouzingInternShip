import React from "react";
import Register from "../components/Register";
import AddHousePage from "../pages/AddHouse";
import DetailesPage from "../pages/Detailes";
import Generic from "../pages/Generic";
import Home from "../pages/Home";
import MyPropertiesPage from "../pages/MyProperties";
import PropertiesPage from "../pages/Properties";
import SigninPage from "../pages/Signin";
//components

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <Home />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <PropertiesPage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: "2-1",
    title: "Properties",
    path: "/properties/:id",
    Element: <DetailesPage />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Register />,
    param: true,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Signin",
    path: "/signin",
    Element: <SigninPage />,
    search: "?",
    param: true,
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: "Sign Up",
    path: "/signup",
    Element: <Generic />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 6,
    title: "MyProperties",
    path: "/profile/properties",
    Element: <MyPropertiesPage />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 7,
    title: "Add new House",
    path: "/profile/add",
    Element: <AddHousePage />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 8,
    title: "Add new House",
    path: "/profile/add/:id",
    Element: <AddHousePage />,
    search: "?",
    hidden: true,
    private: false,
  },
];
