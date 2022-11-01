import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "../components/card/Card";
import Main from "../components/main/Main";
import Modal from "../components/modal/Modal";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<Card />} />,
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
