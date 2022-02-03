import { Center, Input } from "@chakra-ui/react";

const Filter = ({ name, tag, setName, setTag }) => {
  return (
    <Center flex="1" justifyContent="center" mb={"6"}>
      <Input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        borderRightRadius="0"
        maxW="sm"
        placeholder="Search by name"
      />
      <Input
        name="tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        borderLeftRadius="0"
        maxW="sm"
        placeholder="Search by tag"
      />
    </Center>
  );
};

export default Filter;
