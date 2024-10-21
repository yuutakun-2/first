import React, { useState } from "react";
function Item(props) {
  return (
    <li>
      {props.name}, ${props.price}
    </li>
  );
}
export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Orange", price: 0.89 },
  ]);
  const add = () => {
    const id = data.length + 1;
    setData([...data, { id, name: `Item ${id}`, price: 0.01 * id }]);
  };

  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        {data.map((i) => (
          <Item name={i.name} price={i.price} />
        ))}
      </ul>
      <button onClick={add}>Add</button>
    </div>
  );
}
