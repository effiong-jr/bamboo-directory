import React, { useContext, useEffect, useState } from "react";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { Box } from "@chakra-ui/react";
import Filter from "../components/Filter";
import UsersList from "../components/UsersList";
import { StoreContext } from "../context/storeContext";

const App = observer(() => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const store = useContext(StoreContext);

  useEffect(() => {
    store.getUsers();
  }, [store]);

  useEffect(() => {
    setUsers(store.users);
  }, [store.users]);

  const handleSearchByTag = () => {
    const taggedUsers = users.filter(
      (user) => user?.tags && user?.tags.includes(tag.toLowerCase())
    );

    if (taggedUsers.length) {
      // taggedUsers.length ? setUsers(taggedUsers) : setUsers([]);
      taggedUsers.length && setUsers(taggedUsers);
      // setUsers(taggedUsers);
      return;
    }

    // setUsers([]);
  };

  const handleSearchByName = () => {
    const filteredByName = users.filter((user) =>
      user?.name.toLowerCase().match(name.toLowerCase())
    );

    if (filteredByName.length) {
      filteredByName.length && setUsers(filteredByName);
      return;
    }

    setUsers([]);
  };

  useEffect(() => {
    if (tag.length) {
      handleSearchByTag();
      return;
    }

    setUsers(store.users);
  }, [tag]);

  useEffect(() => {
    if (name.length) {
      handleSearchByName();
      return;
    }

    setUsers(store.users);
  }, [name]);

  return (
    <Box paddingTop="20" maxW="container.md" mx={"auto"}>
      {/* Filter Section */}
      <Filter
        handleSearchByName={handleSearchByName}
        handleSearchByTag={handleSearchByTag}
        name={name}
        setName={setName}
        tag={tag}
        setTag={setTag}
      />

      {/* Users List Section */}
      <Box>
        <UsersList users={users} />
      </Box>
    </Box>
  );
});

export default App;
