import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

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
    <>
      <input
        type="text"
        name="name"
        onChange={onImputChange}
        value={user.name}
      ></input>
      <Button
        variant="secondary"
        onClick={saveEdits}
        className="listButton"
        size="sm"
      >
        Save
      </Button>
    </>
  );
}
