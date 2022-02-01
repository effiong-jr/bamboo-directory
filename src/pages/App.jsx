import { Box } from "@chakra-ui/react";
import Filter from "../components/Filter";
import Card from "../components/Card";

const App = () => {
  return (
    <Box
      //   border="1px"
      paddingTop="20"
      //   borderColor="gray.200"
      maxW="container.md"
      mx={"auto"}
    >
      {/* Filter Section */}
      <Filter />

      {/* User Cards Section */}
      <Box>
        <Card />
      </Box>
    </Box>
  );
};

export default App;
