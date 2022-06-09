import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useUsersContentHook } from '../../contexts/userContext';
export default function UsersFilter({ filter, setFilter }) {
  const { isLoggedIn, login, logout } = useUsersContentHook();

  function onChange(e) {
    setFilter(e.target.value);
  }

  return (
    <>
      {isLoggedIn ? (
        <Button
          variant="secondary"
          size="sm"
          onClick={logout}
          className="listButton"
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="secondary"
          size="sm"
          onClick={login}
          className="listButton"
        >
          Login
        </Button>
      )}

      <Form.Select
        aria-label="Default select example"
        onChange={onChange}
        value={filter}
        style={{ margin: '1rem auto', width: '70%' }}
      >
        <option value="all">All</option>
        <option value="Done">Done</option>
        <option value="notdone">Not Done</option>
      </Form.Select>
    </>
  );
}
