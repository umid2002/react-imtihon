import { createContext, useState, useEffect } from "react";
import menuData from "../components/data/data";
import LoadingSpinner from "../components/loader/loader";

export const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [menu, setMenu] = useState(menuData);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUsers]);

  if (isloading) {
    return <LoadingSpinner />;
  }

  return (
    <TodosContext.Provider value={{ users, setUsers, menu, setMenu }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
