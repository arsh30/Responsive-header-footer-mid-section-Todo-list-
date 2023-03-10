import "./table.css";
import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const Table = ({ data }) => {
  console.log("DATA", data);
  // const arr = [
  //   { id: 0, name: "Arshdeep", country: "Delhi", contact: 1233456789 },
  //   { id: 1, name: "Simran", country: "Punjab", contact: 1233456789 },
  //   { id: 2, name: "Dripti", country: "Himachal", contact: 1233456789 },
  //   { id: 3, name: "riya", country: "UP", contact: 1233456789 },
  // ];
  // const [myArr, setMyArr] = useState(arr);
  // console.log(myArr);

  const removeItem = (id) => {
    const updateArr = data.filter((elem) => {
      return id !== elem.id;
    });
    console.log(updateArr);
    // setMyArr(updateArr);
  };
  return (
    // <div className="container">
    <table className="table">
      <tbody className="tbody">
        <tr className="tr-heading">
          <th>Name</th>
          <th>State</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>

        {data &&
          data.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.state}</td>
                <td>{elem.contact}</td>
                <td>
                  <button
                    onClick={() => removeItem(elem.id)}
                    className="remove"
                  >
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
    // </div>
  );
};

export default Table;
