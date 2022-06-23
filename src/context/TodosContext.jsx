import { createContext, useState, useEffect, useContext } from 'react';

const TodosContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState({ value: false, type: '' });
  const [todo, setTodo] = useState({ id: '', completed: '' });

  const getTodos = async () => {
    const response = await fetch(API_URL);
    const { data } = await response.json();
    setTodos(data);
  };

  const createTodo = async ({ task }) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ task, completed: false }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log(res);
    getTodos();
  };

  const updateTodo = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const response = await res.json();
    console.log(response);
    getTodos();
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    const response = await res.json();
    console.log(response);
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        createTodo,
        updateTodo,
        deleteTodo,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};
