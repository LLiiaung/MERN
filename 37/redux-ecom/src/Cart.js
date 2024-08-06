import React from "react";
import {useDispatch, useSelector } from "react-redux";
import cartReducer from "./reducers/cartReducer";

export default function Cart() {
  const cartobj = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch()
  const tablebody = cartobj.cartitems.map((item) => {
    return (
      <tr key={item.itemName}>
        <td>{item.itemName}</td>
        <td>{item.itemPrice}</td>
        <button className="btn btn-dange" onClick={()=>{dispatch({type:'DELETE_ITEM_FROM_CART', payload:item})}}>DELETE</button>
      </tr>
    );
  });
  return (
    <div className="row justify-content-center">
      <table className="table table-dark table-bordered col-md-8 mt-5">
        <thread>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Action</th>
          </tr>
        </thread>
        <tbody>{tablebody}</tbody>
      </table>
    </div>
  );
}
