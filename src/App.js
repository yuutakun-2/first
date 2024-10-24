import React, { useRef, useState } from "react";
import Toolbar from "./Toolbar";
function Item(props) {
  return (
    <li>
      {props.name}, ${props.price}
    </li>
  );
}

function AddForm(props) {
  const nameRef = useRef();
  const priceRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        props.add(nameRef.current.value, priceRef.current.value);
      }}
    >
      <input type="text" ref={nameRef} /> <br />
      <input type="text" ref={priceRef} /> <br />
      <button type="submit">Add</button>
    </form>
  );
}
export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Orange", price: 0.89 },
  ]);

  const add = (name, price) => {
    const id = data.length + 1;
    setData([...data, { id, name, price }]);
  };
  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        {data.map((i) => (
          <Item key={i.id} name={i.name} price={i.price} /> //key is needed in Virtual DOM
        ))}
      </ul>
      <AddForm add={add} />
      <Toolbar>
        <h1>This is toolbar heading</h1>
        <p>This is a paragraph</p>
      </Toolbar>
    </div>
  );
}
