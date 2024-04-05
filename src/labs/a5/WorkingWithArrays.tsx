import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

function WorkingWithArrays() {
    const API = "https://kanbas-node-server-app-jy0a.onrender.com/a5/todos";

    const [errorMessage, setErrorMessage] = useState(null);

    const [todo, setTodo] = useState({
        id: 1, 
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState<any[]>([]);

    // const fetchTodos = async () => {
    //     const response = await axios.get(API);
    //     setTodos(response.data);
    // };
    
    // useEffect(() => {
    //     fetchTodos();
    // }, []);

    const removeTodo = async (todo: any) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };    

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };    

    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const deleteTodo = async (todo: any) => {
        try{
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch(error){
            const axiosError = error as AxiosError;
            console.log(axiosError);
            // setErrorMessage(error.response.data.message); 
        }
    };    

    const updateTodo = async () => {
        try{
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch(error){
            console.log(error);
            // setErrorMessage(error.response.data.message);      
        }
    };
    
    

    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a className="btn btn-secondary" href={API}>
          Get Todos
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id} type="number"
            onChange={(e) => setTodo({ ...todo,
            id: e.target.valueAsNumber })}/>
        <span>  </span>
        <a className="btn btn-secondary" href={`${API}/${todo.id}`}>
            Get Todo by ID
        </a>

        <h3>Filtering Array Items</h3>
        <a className="btn btn-primary" href={`${API}?completed=true`}>
            Get Completed Todos
        </a>

        <h3>Creating new Items in an Array</h3>
        <a className="btn btn-primary" href={`${API}/create`}>
            Create Todo
        </a>

        <h3>Deleting from an Array</h3>
        <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
            Delete Todo with ID = {todo.id}
        </a>
        <br/>
        <br/>
        <input type="text" value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
        <h3>Updating an Item in an Array</h3>
        <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
            Update Title to {todo.title}
        </a>

        
        <h3>Updating completed boolean using checkbox</h3>
        <input type="checkbox" checked={todo.completed}
            onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}/>
        <span>  </span>
        <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`} >
            Complete Todo with ID = {todo.id}
        </a>

        <h3>Updating todo's description</h3>
        <input type="text" value={todo.description}
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}/>
        <span>  </span>
        <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`} >
            Describe Todo with ID = {todo.id}
        </a>

        <br/>
        <h4>Create TODO</h4>
        <button onClick={createTodo} >
            Create Todo
        </button>
        <span>  </span>
        <button onClick={updateTitle} >
            Update Title
        </button>
        <br/>
        <br/>
        <textarea value={todo.description}
            onChange={(e) => setTodo({ ...todo,
            description: e.target.value })} />
        <br/>
        <input value={todo.due} type="date"
            onChange={(e) => setTodo({
            ...todo, due: e.target.value })} />
        <br/>
        <label>
            <input checked={todo.completed} type="checkbox"
            onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })} />
            Completed
        </label>
        <br/>
        <button onClick={postTodo}> Post Todo </button>

        <br/>
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                <input checked={todo.completed}
                type="checkbox" readOnly />
                {todo.title}
                <p>{todo.description}</p>
                <p>{todo.due}</p>
                <span>  </span>
                <button onClick={() => fetchTodoById(todo.id)} >
                    Edit
                </button>
                <button onClick={() => removeTodo(todo)} >
                    Remove
                </button>
                {todo.title}
            </li>
            ))}
        </ul>

        <button onClick={() => deleteTodo(todo)}
            className="btn btn-danger float-end ms-2">
            Delete
        </button>
        <br/>
        <button className="btn btn-warning float-end ms-2" onClick={updateTodo}>
            Update Todo
        </button>

        {errorMessage && (
            <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
            </div>
        )}


      </div>
    );
  }
  export default WorkingWithArrays;
  
  