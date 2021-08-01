import React, { useState, useEffect } from "react";
import axios from "axios";

// let hyperlink = "https://fakestoreapi.com/products";
let hyperlink = "https://jsonplaceholder.typicode.com/todos";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  return (
    <div>
      {/* <h1>Todos list is on this page.</h1> */}
      {todos.map((todo) => {
        const { title, completed, id } = todo;
        return (
          <div>
            <h2>{title}</h2>
            <h2>{id}</h2>
            {/* <h2>{completed}</h2> */}
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
