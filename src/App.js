import React, { useRef, useState } from "react";
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
  const nameRef = useRef();
  const priceRef = useRef();
  const add = () => {
    const id = data.length + 1;
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    setData([...data, { id, name, price }]); //No need to write name: name because key and value are same, so JS will do it automatically
  };

  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        {data.map((i) => (
          <Item key={i.id} name={i.name} price={i.price} /> //key is needed in Virtual DOM
        ))}
      </ul>
      <input type="text" ref={nameRef} /> <br />
      <input type="text" ref={priceRef} /> <br />
      <button onClick={add}>Add</button>
    </div>
  );
}
