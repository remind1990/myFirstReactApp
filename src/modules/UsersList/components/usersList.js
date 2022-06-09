import React from 'react';
import List from './list.js';
import { useThemeContext } from '../../contexts/themeContext.js';

export default function UsersList({ users, onDelete, saveData }) {
  const { Theme } = useThemeContext();

  return (
    <ul
      className={
        Theme.name === 'light' ? 'usersUl  darkUl' : 'usersUl lightUl'
      }
    >
      {users.map((user) => (
        <List
          onDelete={onDelete}
          key={user.id}
          user={user}
          saveData={saveData}
        />
      ))}
    </ul>
  );
}
