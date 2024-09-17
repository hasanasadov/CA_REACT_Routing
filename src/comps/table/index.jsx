import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Thead from "./thead";
import Tbody from "./tbody";
import Loading from "../loading";
import "react-toastify/dist/ReactToastify.css";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        Toastify({
          text:error,
          duration: 3000,
          backgroundColor: "red",
        }).showToast();
        
      });
  }, []);

  return (
    <div className="w-full flex justify-center flex-col">
      <table className="w-full border border-solid border-blue-600">
        <Thead />
        <Tbody products={products} />
      </table>
      {loading && <Loading />}
    </div>
  );
};

export default Table;
