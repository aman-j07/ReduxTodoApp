import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodo, deleteTodo } from "./redux/actions/todoActions";

const Todos = () => {
  const dispatch = useDispatch();
  const refTitle = useRef();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      .then(res => dispatch(fetchTodo(res.data)));
  }, []);

  const list = useSelector((state) => state.todos);

  const addTodoN=()=>{
    let title = refTitle.current.value;
    dispatch(addTodo(title));
    refTitle.current.value="";
  };

  return (
    <div id="todoDiv">
      <div id="inputCover">
        <input ref={refTitle} name="todo" placeholder="Add Todo..." />
        <button onClick={addTodoN} id="btnSubmit">Submit</button>
      </div>
      <ul className="todoList">
        {list.map((item, i) => {
          return (
            <li key={item.id}>
              <p><input type="checkbox" />{item.title}</p>
              <button onClick={() => dispatch(deleteTodo(i))}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;