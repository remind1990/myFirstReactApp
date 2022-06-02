import React, { useState } from 'react';
import ListInput from './listInput.js';
import { Button } from 'react-bootstrap';
import { useThemeContext } from '../../contexts/themeContext.js';

export default function List(props) {
  const [user, setUser] = useState(props.user);
  const { Theme } = useThemeContext();
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
      <li
        className={
          Theme.name === 'light' ? 'userLi userLiDark' : 'userLi'
        }
      >
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
