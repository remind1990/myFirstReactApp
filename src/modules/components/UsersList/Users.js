import React, { useState, useEffect, useMemo } from 'react';
import UsersList from './usersList.js';
import Form from './form.js';
import { getUsers } from '../../services/services.js';
import { updateUser } from '../../services/services.js';
import { deleteUser } from '../../services/services.js';
import { createNew } from '../../services/services';
import UsersFilter from './UsersFilter.js';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(
    localStorage.getItem('filter') || 'all'
  );
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);
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
    const newArray = users.map((user) =>
      user.id === id ? newUser : user
    );
    setUsers(newArray);

    updateUser(newUser);
  }

  const filteredUsers = useMemo(() => {
    if (filter !== 'all') {
      return users.filter(
        (user) =>
          (filter === 'Done' && user.completed) ||
          (filter === 'notdone' && !user.completed)
      );
    } else {
      return users;
    }
  }, [users, filter]);
  console.log("Users Render")
  return (
    <div className="container">
      <UsersFilter
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      ></UsersFilter>
      <UsersList
        users={filteredUsers}
        onDelete={deleteUsers}
        saveData={saveData}
      />
      <Form onSave={createNewUser} />
    </div>
  );
}
