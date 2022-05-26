import React, { Component, useState } from 'react';

export default function ListInput(props) {
  const [user, setUsers] = useState(props.user);
  function onImputChange(e) {
    setUsers({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function saveEdits() {
    props.changeVisible();

    props.saveData(user.id, user.name);
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={onImputChange}
        value={user.name}
      ></input>
      <button onClick={saveEdits}>Save</button>
    </div>
  );
}
