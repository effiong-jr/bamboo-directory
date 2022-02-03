import { useState, useContext } from "react";
import { Input } from "@chakra-ui/react";
import { StoreContext } from "../context/storeContext";

const AddTagForm = ({ userId }) => {
  const [tag, setTag] = useState("");
  const store = useContext(StoreContext);

  const handleChange = (e) => {
    e.preventDefault();

    setTag(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.addTag(userId, tag.toLowerCase());

    setTag("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={tag}
        onChange={(e) => handleChange(e)}
        onClick={(e) => e.preventDefault()}
        placeholder="add a tag"
        mt="4"
        display="block"
        width="300px"
      />
    </form>
  );
};

export default AddTagForm;
