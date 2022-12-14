import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

const Main = () => {
  const initializePreviousSearchData = () => {
    return JSON.parse(localStorage.getItem("api")) ?? [];
  };
  const local=()=>{
  //  
  }


  const navigate=useNavigate()
  const [book, setBook] = useState("");
  const [api, setApi] = useState(initializePreviousSearchData());

  const url = `https://www.googleapis.com/books/v1/volumes?q=%27${book}%27&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=25`;
  const handleSubmit = (e) => {
    e.preventDefault();

  
    getApi();
    setBook(" ");
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
   useEffect(() => {
    localStorage.setItem("api", JSON.stringify(api));
  
  }, [api]);
 
  return (
    <div className="form">
      <form  onSubmit={handleSubmit} action="">
        <h1>Find a Book</h1>
        <input
        
          onChange={(e) => setBook(e.target.value)}
          type="text"
          value={book}
          className="mt-2 border border-danger "
          
        />

        <button onClick={()=> local(localStorage.clear())  } type="submit" className="btn btn-danger m-2 text-center mb-3  p-2 " >Search</button>
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
              <h5> {item?.saleInfo?.listPrice?.amount} ₺ </h5>
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
