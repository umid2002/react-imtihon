import { createContext, useState, useEffect } from "react";
import { jobs } from "../consts";
import { getRndInteger } from "../utilis";
import LoadingSpinner from "../components/loader/loader";

export const TodosContext = createContext();

const TodosProvider = ( props ) => {
  const navLinksData = [
    {
      id: 1,
      name: "All"
    },
    {
      id: 2,
      name: "Design"
    },
    {
      id: 3,
      name: "Theory"
    },
    {
      id: 4,
      name: "UI"
    },
    {
      id: 5,
      name: "UX"
    },
    {
      id: 6,
      name: "Typography"
    }
  ]
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState();
  const [paginatedAlbums, setpaginatedAlbums] = useState();
  const [activePageNumber, setactivePageNumber] = useState(1);
  const [isloading, setLoading] = useState(true);
  const [navLinks, setNavlinks] = useState(navLinksData);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        const newDate = data?.map((album) => {
          return {
            ...album, // Massiv ichidagi har bitta Objectni sochib yuborish.
            sort: jobs[getRndInteger(0, 5)],
            time: "3 minustes read",
            date: new Date(`${getRndInteger(2001, 2022)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`).toString(),
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

  if (isloading) {
    return <LoadingSpinner />;
  }

  return (
    <TodosContext.Provider
      value={{
        users,
        setUsers,
        filteredUsers,
        setFilteredUsers,
        paginatedAlbums,
        setpaginatedAlbums,
        activePageNumber,
        setactivePageNumber,
        navLinks,
        setNavlinks,
        open,
        setOpen
      }} {...props}
    >
    </TodosContext.Provider>
  );
};

export default TodosProvider;
