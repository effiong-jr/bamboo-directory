import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Filter from "../components/Filter";
import Card from "../components/Card";

import { useUsers } from "../hooks/users";

const App = () => {
  const users = useUsers();

  console.log(users);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Box paddingTop="20" maxW="container.md" mx={"auto"}>
      {/* Filter Section */}
      <Filter />

      {/* User Cards Section */}
      <Box>
        {/* {typeof users === "object" &&
          (users || []).map((user) => <Card key={user.id} user={user} />)} */}
      </Box>
    </Box>
  );
};

export default App;
