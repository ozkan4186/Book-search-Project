import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";

const Main = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [value, setValue] = useState({
    bookname: "",
  });
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=${value.bookname}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=20";

  const searchBook = async () => {
    try {
      const { data } = await axios(url);
      console.log(data.items);
      setBook(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchBook();
  }, []);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };
  console.log(value);

  const handleSubmit = (e) => {
    searchBook();
    e.preventDefault();
    navigate("/card");
    setValue({
      bookname: "",
    });
  };

  console.log(book);

  return (
    <div className="container">
      <h1>Find a Book</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChange}
          value={value.bookname}
          id="bookname"
          type="text"
        />
        <br /> <br />
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
      {book &&
        book.map((item) => {
          return <Card item={item} />;
        })}
    </div>
  );
};

export default Main;
