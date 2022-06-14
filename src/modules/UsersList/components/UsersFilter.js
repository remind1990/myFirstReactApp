import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function UsersFilter({ filter, setFilter }) {
  const navigate = useNavigate();
  function onChange(e) {
    setFilter(e.target.value);
  }

  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        style={{ margin: '0 1%' }}
        onClick={() => setTimeout(() => navigate(-1), 500)}
      >
        Back to home page
      </Button>

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
