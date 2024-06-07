import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function BookDetails() {
  const [book, setBook] = useState();
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5050/book/${id}`)
      .then((response) => {
        setBook(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const purchaseHandler = (id) => {
    axios
      .post(
        `http://localhost:5050/books/purchase/${Math.floor(
          Math.random() * 10
        )}`,
        book
      )
      .then(() => {
        alert(
          "Your Book added to the cart, You are selected book id is : " + id
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Author</td>
            <td>Price</td>
            <td>Genre</td>
            <td>Availability</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td>{book.genre}</td>
            <td>{book.availability}</td>
            <td>
              <button
                onClick={() => {
                  purchaseHandler(book.id);
                }}
              >
                Purchase
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BookDetails;
