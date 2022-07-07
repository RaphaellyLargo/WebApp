import React, { useState } from "react";

import AddUser from "./components/AddUser";
import { User } from "./model/User";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  console.log(users);

  function addUserHandler(username, age) {
    const newUser = new User(username, age);
    setUsers([newUser, ...users]);
  }

  function deleteUserHandler(userId) {
    console.log(userId);

    const userToDelete = users.find((user) => user.id === userId);
    const index = users.indexOf(userToDelete);
    if (index > -1) {
      users.splice(index, 1);
    }
    setUsers([...users]);
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList onDeleteUser={deleteUserHandler} users={users}></UsersList>
    </div>
  );
}

export default App;
