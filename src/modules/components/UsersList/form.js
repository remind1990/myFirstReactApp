import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
    <form className="namesForm" onSubmit={onSubmit}>
      <input
        className="nameInput"
        type="text"
        name="name"
        value={user.name}
        onChange={onImputChange}
      ></input>
      <input
        className="surnameInput"
        type="text"
        name="surname"
        value={user.surname}
        onChange={onImputChange}
      ></input>

      <Button
        variant="outline-success"
        style={{ margin: '0.2rem' }}
        type="submit"
        onClick={onSubmit}
      >
        Save
      </Button>
    </form>
  );
}
