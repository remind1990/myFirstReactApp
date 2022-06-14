import React, { useMemo } from 'react';
import UsersList from './usersList.js';
import Form from './form.js';
import Loading from '../../Loaders/loading.js';

import { useUsers } from './useUsers.js';

import UsersFilter from './UsersFilter.js';
import { useThemeContext } from '../../contexts/themeContext.js';
import { Button } from 'react-bootstrap';

export default function Users() {
  const {
    users,
    Status,
    filter,
    setFilter,
    deleteOneUser,
    createNewUser,
    saveData,
  } = useUsers();
  const { Theme, changeToDark, changeToLight } = useThemeContext();

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

  return (
    <div className="container usersContainer" style={Theme}>
      {Theme.name === 'light' ? (
        <Button variant="secondary" size="sm" onClick={changeToDark}>
          {Theme.name}
        </Button>
      ) : (
        <Button variant="secondary" size="sm" onClick={changeToLight}>
          {Theme.name}
        </Button>
      )}
      <UsersFilter
        filter={filter}
        setFilter={setFilter}
      ></UsersFilter>
      {Status === 'Loading' ? (
        <Loading />
      ) : (
        <UsersList
          users={filteredUsers}
          onDelete={deleteOneUser}
          saveData={saveData}
        />
      )}

      <Form onSave={createNewUser} />
    </div>
  );
}
