import React from "react";
import "../../../style/global.css";
const Tbody = ({ products }) => {
  return (
    <tbody >
      {products.map((product) => (
        <tr  key={product.id}>
          <td className="bg-slate-200">{product.id}</td>
          <td className="bg-slate-300">{product.name}</td>
          <td className="bg-slate-200">${product.unitPrice}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
