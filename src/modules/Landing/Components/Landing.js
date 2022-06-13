import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Landing() {
  const [EntryDiv, setEntryDiv] = useState({
    transition: 'opacity 1s ease-in-out',
    opacity: '1',
    margin: '2rem auto',
    width: '40%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#C1C3C4',
    padding: '1%',
    borderRadius: '8px',
  });

  return (
    <div style={EntryDiv}>
      <Button variant="outline-info">
        <Link to="/Users">Users</Link>
      </Button>
      <Button variant="outline-info">
        <Link to="/Stickers">Stickers</Link>
      </Button>
      <Button variant="outline-info">
        <Link to="/Albums">Albums</Link>
      </Button>
    </div>
  );
}
