import React, { Component } from 'react';
import List from './list.js';

export default function UsersList({ users, onDelete, saveData }) {
  return (
    <ul className="usersUl">
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
