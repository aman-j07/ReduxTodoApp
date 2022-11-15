import axios from "axios"

export const ADD_TODO_SUCCESS="ADD_TODO_SUCCESS"
export const ADD_TODO_FAILURE="ADD_TODO_FAILURE"
export const ADD_TODO_STARTED="ADD_TODO_STARTED"
export const DELETE_TODO="DELETE_TODO"
export const FETCH_TODO="FETCH_TODO"

export const fetchTodo=(todos)=>{
    return{
      type:FETCH_TODO,
      payload:todos
    }
} 

export const addTodo=(title)=>{
  return dispatch=>{
  dispatch(addTodoStarted());

        axios.post(`https://jsonplaceholder.typicode.com/todos`, {
          title:title,
          userId:5,
          completed: false,
        })
        .then(res => {
          dispatch(addTodoSuccess(res.data));
        })
        .catch(err => {
          dispatch(addTodoFailure(err.message));
        });
    };  
  };

  const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
  });
  
  const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {...todo}
  });
  
  const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: error
  });

  export const deleteTodo=index=>{
    return{
      type:DELETE_TODO,
      payload:index
    }
  }