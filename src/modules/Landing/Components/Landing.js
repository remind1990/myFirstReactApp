import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Landing({ visible }) {
  return (
    <div style={entryDiv}>
      <Button variant="outline-info" onClick={visible}>
        <Link to="/First">First Homework</Link>
      </Button>
      <Button variant="outline-info" onClick={visible}>
        <Link to="/Second">Second Homework</Link>
      </Button>
    </div>
  );
}
const entryDiv = {
  margin: '2rem auto',
  width: '40%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#C1C3C4',
  padding: '1%',
  borderRadius: '8px',
};
