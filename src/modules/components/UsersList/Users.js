import React, { Component, useState, useEffect } from 'react';
import UsersList from './usersList.js';
import Form from './form.js';
import { getUsers } from '../../services/services.js';
import { updateUser } from '../../services/services.js';
import { deleteUser } from '../../services/services.js';
import { createNew } from '../../services/services';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  function deleteUsers(id) {
    deleteUser(id);

    const newUsersArray = users.filter((user) => user.id !== id);
    setUsers(newUsersArray);
  }
  function createNewUser(user) {
    user.job = '';
    createNew(user).then((user) => setUsers([...users, user]));
  }

  function saveData(id, newName) {
    const item = users.find((user) => user.id === id);
    const newUser = { ...item, name: newName };
    setUsers(users.map((user) => (user.id === id ? newUser : user)));
    updateUser(newUser);
  }
  return (
    <>
      <UsersList
        users={users}
        onDelete={deleteUsers}
        saveData={saveData}
      />
      <Form onSave={createNewUser} />
    </>
  );
}
