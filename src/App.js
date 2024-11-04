import { useState, useEffect } from "react";
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      });
  }, []);

  function add() {
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ first_name: "Tom" }),
    })
      .then((res) => res.json())
      .then((tom) => {
        setUsers([...users, tom]);
      });
  }
  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.first_name}</li>
        ))}
      </ul>
      <button onClick={add}>New User</button>
    </div>
  );
}
