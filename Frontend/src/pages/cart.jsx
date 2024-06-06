import { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/purchases")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3>Your Orders</h3>
      <table>
        <thead>
          <tr>
            <td>PurchaseID</td>
            <td>BookID</td>
            <td>Title</td>
            <td>Author</td>
            <td>Price</td>
            <td>Genre</td>
          </tr>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.purchaseId}</td>
                <td>{order.id}</td>
                <td>{order.title}</td>
                <td>{order.author}</td>
                <td>{order.price}</td>
                <td>{order.genre}</td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
    </>
  );
}

export default Cart;
