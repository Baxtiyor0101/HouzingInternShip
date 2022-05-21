import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";
// import { Container } from "./style";

const Root = () => {
  return (
    <Routes>
      {/* <Navbar /> */}
      {/* {navbar.map(({ path, Element, id, hidden }) => {
        return hidden && <Route key={id} path={path} element={Element} />;
      })} */}
      <Route element={<Navbar />}>
        {navbar.map(({ path, Element, id, hidden }) => {
          return !hidden && <Route key={id} path={path} element={Element} />;
        })}
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Route>
      <Route path="*" element={<div>page not found</div>} />
    </Routes>
  );
};

export default Root;
