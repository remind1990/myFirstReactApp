import React from 'react';
import { Form } from 'react-bootstrap';
export default function UsersFilter({
  filter,
  setFilter,
  search,
  setSearch,
}) {
  function onChange(e) {
    setFilter(e.target.value);
  }
  function onSearchChange(e) {
    setSearch(e.target.value);
  }
  return (
    <>
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
