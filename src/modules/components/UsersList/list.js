import React, { Component, useState, useEffect } from 'react';
import ListInput from './listInput.js';

export default function List(props) {
  const [user, setUsers] = useState(props.user);
  const [visible, setVisible] = useState(false);

  function onDelete(e) {
    e.stopPropagation();
    props.onDelete(props.user.id);
  }

  function onChangeVisible(e) {
    setVisible(!visible);
    console.log(visible);
  }
  return (
    <>
      <li className="user">
        {user.name} {user.surname}
        {visible ? (
          <ListInput
            key={user.id}
            onChange={props.onImputChange}
            user={user}
            changeVisible={onChangeVisible}
            saveData={props.saveData}
          ></ListInput>
        ) : null}
        <button onClick={onDelete}>Delete</button>
      </li>
      <button onClick={onChangeVisible}>
        {visible ? null : 'Edit'}
      </button>
    </>
  );
}
