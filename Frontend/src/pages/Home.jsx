import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/books")
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>genre</th>
            <th>Availability</th>
            <th></th>
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
              <td>
                <a href={`/bookDetails/${book.id}`}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
