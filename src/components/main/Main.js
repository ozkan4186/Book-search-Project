import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
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

  // useEffect(() => {
  // getApi();
  // }, []);

  return (
    <div className="form">
      <form onSubmit={handleSubmit} action="">
        <h1>kitap bul</h1>
        <input
          onChange={(e) => setBook(e.target.value)}
          type="text"
          value={book}
        />

        <button type="submit">ok</button>
      </form>
      <div className="kapsayan">
        {api.map((item, index) => {
          return item?.volumeInfo?.imageLinks ? (
            <div key={index} className="cardd">
              <img
                src={item?.volumeInfo.imageLinks?.smallThumbnail}
                alt="empty"
              />
              <h4>
                {item?.volumeInfo.imageLinks &&
                  item?.volumeInfo.imageLinks &&
                  item?.volumeInfo?.title}{" "}
              </h4>
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
