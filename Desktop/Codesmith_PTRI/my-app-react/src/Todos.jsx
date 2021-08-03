import { React, useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const url = "https://jsonplaceholder.typicode.com/todos";

export default function Todos() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((res) => {
    //     const taskResponse = res.data;
    //     console.log(taskResponse);
    //     setTasks(taskResponse);
    //   })
    //   .catch((err) => console.log("error from API request"));
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setTasks(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {tasks.map((task, taskIndex) => {
        const { userId, title } = task;
        return (
          <div key={taskIndex}>
            <h1>{title}</h1>
            <h1>{userId}</h1>
          </div>
        );
      })}
      <h1>This is the todos page</h1>
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
