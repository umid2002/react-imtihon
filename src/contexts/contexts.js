import { createContext, useState, useEffect } from "react";
import menuData from "../components/data/data";
import { getRndInteger } from "../utilis";
// import LoadingSpinner from "../components/loader/loader";

export const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState();
  const [menu, setMenu] = useState(menuData);
  const [paginatedAlbums, setpaginatedAlbums] = useState();
  const [activePageNumber, setactivePageNumber] = useState(2);
  // const [isloading, setLoading] = useState(true);
  // const randomTypeSort = [ "Design theory", "Typograhp", "User Interface", "UX", "Design tools", "Figma", "Color theory" ].random(type => {return type})
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        const newDate = data.map((album) => {
          return {
            ...album,
            // date: new Date(`${getRndInteger(2001, 2020)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`),
            date: "September 12",
            sort: "Design",
            time: "3 minustes read",
            like: getRndInteger(0, 100),
            share: getRndInteger(0, 100),
          };
        });
        setUsers(newDate);
        setFilteredUsers(newDate);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUsers]);

  useEffect(() => {
    if (filteredUsers) {
      setpaginatedAlbums(
        filteredUsers.slice((activePageNumber - 1) * 10, activePageNumber * 10)
      );
    }
  }, [filteredUsers, activePageNumber]);

  // if (isloading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <TodosContext.Provider
      value={{
        users,
        setUsers,
        menu,
        setMenu,
        filteredUsers,
        setFilteredUsers,
        paginatedAlbums,
        setpaginatedAlbums,
        activePageNumber,
        setactivePageNumber,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
