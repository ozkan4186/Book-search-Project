import React from "react";
import { useLocation } from "react-router-dom";

const Modal = () => {
  const { state } = useLocation();
  console.log(state);
  console.log("nfkdnfk");

  return (
    <div className="modals">
      <div className="modals2">
        <img src={state?.volumeInfo.imageLinks?.smallThumbnail} alt="empty" />
        <div className="title">
          <h2> {state?.volumeInfo?.title} </h2>
          <h3> {state?.volumeInfo?.authors?.[0]}</h3>
          <p>
            {" "}
            {state?.volumeInfo.publisher} {state?.volumeInfo.publishedDate}{" "}
          </p>
          <button className="btn btn-primary" >More</button>
        </div>
      </div>
      <div className="sec">
        <p> {state?.volumeInfo?.description}</p>
      </div>
    </div>
  );
};

export default Modal;
