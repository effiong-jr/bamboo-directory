import React from "react";
import { observer } from "mobx-react";
import Card from "./Card";

const UsersList = observer(({ users }) => {
  const usersList = (users || []).map((user) => (
    <Card key={user.id} user={user} />
  ));

  return <div>{usersList}</div>;
});

export default UsersList;
