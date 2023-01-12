import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import Login from "./Login";
import Shoes from "./Dogs";
import SingleShoe from "./SingleDog";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shoes />} />;
      <Route path="/login" element={<Login />} />
      <Route path="/dogs/:id" element={<ReqAuth><SingleShoe /></ReqAuth>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
