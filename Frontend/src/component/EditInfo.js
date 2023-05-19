import React, { useState, useEffect } from "react";
import Dnavnar from "./Dnavbar";
import { Link } from "react-router-dom";
import swal from "sweetalert";
function EditInfo() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  // how to get id from url
  const id = window.location.pathname.split("/")[2];
  console.log(id);
  useEffect(() => {
    try {
      fetch(`http://localhost:3000/book/${id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setName(res.books.BookName);
          setAuthor(res.books.AuthorName);
          setType(res.books.type);
          setPrice(res.books.Price);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleclick = (e) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:3000/book/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Allow-Cross-Origin": "*",
        },
        body: JSON.stringify({
          BookName: name,
          AuthorName: author,
          type: type,
          Price: price,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.error) {
            swal({
              title: "Error",
              text: res.error,
              icon: "error",
              button: "ok",
            });
          } else {
            swal({
              title: "Success",
              text: res.message,
              icon: "success",
              button: "ok",
            }).then((responce) => {
              window.location.href = "/admin";
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dnavnar></Dnavnar>
      <div className="container mx-auto mt-12">
        <h2 className="text-center text-green-600 text-2xl font-bold mb-6">
          Edit Book
        </h2>
        <form onSubmit={handleclick} className="w-64 mx-auto">
          <div className="mb-4">
            <label htmlFor="uname" className="block mb-1">
              <b>Book Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Book Name"
              name="uname"
              required
              value={name}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="psw" className="block mb-1">
              <b>Author Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Author Name"
              name="psw"
              required
              value={author}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="psw" className="block mb-1">
              <b>Book Type</b>
            </label>
            <input
              type="text"
              placeholder="Enter Book Type"
              name="psw"
              required
              value={type}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600"
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="psw" className="block mb-1">
              <b>Book Price</b>
            </label>
            <input
              type="text"
              placeholder="Enter Book Price"
              name="psw"
              required
              value={price}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-900"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditInfo;
