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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-box-arrow-in-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
          />
          <path
            fill-rule="evenodd"
            d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
          />
        </svg>
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
