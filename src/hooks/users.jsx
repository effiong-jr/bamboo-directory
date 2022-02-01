import axios from "axios";

export const useUsers = async () => {
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    });

    console.log(data);

    return data;
  } catch (error) {
    return error;
  }
};
