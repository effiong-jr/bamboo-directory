import { createContext } from "react";
import { runInAction } from "mobx";
import { useLocalObservable, observer } from "mobx-react";
import axios from "axios";
import { UserEndpoints } from "../constants/endpoints";

export const StoreContext = createContext();

export const StoreProvider = observer(({ children }) => {
  const store = useLocalObservable(() => ({
    users: [],

    getUsers() {
      axios
        .get(UserEndpoints.getUsers)
        .then((response) => runInAction(() => (this.users = response.data)));
    },

    addTag(userId, tag) {
      const updatedList = store.users.map((user) => {
        if (user.id === userId) {
          if ("tags" in user) {
            return { ...user, tags: [...user.tags, tag] };
          }
          return { ...user, tags: [tag] };
        }

        return user;
      });

      store.users = updatedList;
    },

    filterByTag(users) {
      runInAction(() => (this.users = users));
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
});
