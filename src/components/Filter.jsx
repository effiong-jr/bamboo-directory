import { Center, Input } from "@chakra-ui/react";

const Filter = () => {
  return (
    <Center flex="1" justifyContent="center" mb={"6"}>
      <Input borderRightRadius="0" maxW="sm" placeholder="Search by name" />
      <Input borderLeftRadius="0" maxW="sm" placeholder="Search by tag" />
    </Center>
  );
};

export default Filter;
