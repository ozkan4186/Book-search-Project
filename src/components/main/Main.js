import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

const Main = () => {

  const navigate=useNavigate()
  const [book, setBook] = useState("");
  const [api, setApi] = useState([]);

  const url = `https://www.googleapis.com/books/v1/volumes?q=%27${book}%27&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=25`;
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("mdksmdks");
    getApi();
    setBook("");
  };
  const getApi = async () => {
    try {
      const { data } = await axios(url);
      console.log(data.items);
      setApi(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} action="">
        <h1  >Find a Book</h1>
        <input
        autoFocus
          onChange={(e) => setBook(e.target.value)}
          type="text"
          value={book}
          className="mt-2 border border-danger "
          
        />

        <button  type="submit" className="btn btn-danger m-2 text-center pb-2  " >ok</button>
      </form>
      <div className="container">
        {api.map((item, index) => {
          return item?.volumeInfo?.imageLinks ? (
            <div key={index} className="cardd" onClick={()=>navigate("/modal" ,{state:item}  )} >
              <img
                src={item?.volumeInfo.imageLinks?.smallThumbnail}
                alt="empty"
              />
            <h4> {item?.volumeInfo.imageLinks && item?.volumeInfo.imageLinks && item?.volumeInfo?.title}
              </h4>
              <h5> {item?.saleInfo?.listPrice?.amount} </h5>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    
    </div>
  );
};

export default Main;
