import React, { useState, useEffect, useImperativeHandle } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

export default function Todos() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      const responseTodos = res.data;
      setTasks(responseTodos);
    });
  }, []);

  return (
    <div>
      {tasks.map((task, taskIdx) => {
        const { title, userId } = task;
        return <div>{title}</div>;
      })}
    </div>
  );
}
//
//
//
//
//
//
//
//
//
//

// const Todos = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//       const responseTodos = res.data;
//       setTodos(responseTodos);
//     });
//   }, []);

//   return (
//     <div>
//       {/* <h1>Todos list is on this page.</h1> */}
//       {todos.map((todo) => {
//         const { title, completed, id } = todo;
//         return (
//           <div>
//             <h2>{title}</h2>
//             <h2>{id}</h2>
//             {/* <h2>{completed}</h2> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Todos;
