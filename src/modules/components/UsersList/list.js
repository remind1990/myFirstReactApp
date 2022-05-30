import React, { Component, useState, useEffect } from 'react';
import ListInput from './listInput.js';
import { Button } from 'react-bootstrap';

export default function List(props) {
  const [user, setUser] = useState(props.user);
  const [visible, setVisible] = useState(false);

  function onDelete(e) {
    e.stopPropagation();
    props.onDelete(props.user.id);
  }

  function onChangeVisible(e) {
    setVisible(!visible);
  }

  return (
    <>
      <li className="user">
        {props.user.name} {props.user.surname}
        {visible ? (
          <ListInput
            key={user.id}
            user={props.user}
            changeVisible={onChangeVisible}
            saveData={props.saveData}
          ></ListInput>
        ) : null}
        <Button
          variant="secondary"
          size="sm"
          className="listButton"
          onClick={onChangeVisible}
        >
          {visible ? 'Cancel' : 'Edit'}
        </Button>
        <Button
          variant="secondary"
          className="listButton delete"
          onClick={onDelete}
          size="sm"
        >
          Delete
        </Button>
      </li>
    </>
  );
}
