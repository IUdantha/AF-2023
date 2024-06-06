import axios from "axios";
import { useEffect, useState } from "react";

function Search() {
  const [searchKey, setSearchKey] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {}, [books]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(searchKey);
    axios
      .get(`http://localhost:5050/books/search?title=${searchKey}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h5>Search the book</h5>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Genre</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.genre}</td>
                <td>{book.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Search;
