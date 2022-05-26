import React, { Component, useState } from 'react';

export default function Form(props) {
  const [user, setUsers] = useState({ name: '', surname: '' });

  function onImputChange(e) {
    setUsers({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    props.onSave(user);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={onImputChange}
      ></input>
      <input
        type="text"
        name="surname"
        value={user.surname}
        onChange={onImputChange}
      ></input>
      <button>Save</button>
    </form>
  );
}
