import { useState } from 'react';
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
export default function Landing() {
  const navigate = useNavigate();
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
  function RouteClick(e) {
    e.preventDefault();
    setTimeout(() => {
      navigate('/' + e.target.name);
    }, 500);
  }

  return (
    <div className="d-grid gap-3 container">
      <h3>Please make your option</h3>
      <Button
        variant="outline-primary"
        name={'Users'}
        onClick={RouteClick}
      >
        Users
      </Button>
      <Button
        variant="outline-primary"
        name={'Stickers'}
        onClick={RouteClick}
      >
        Stickers
      </Button>
      <Button
        variant="outline-primary"
        name={'Albums'}
        onClick={RouteClick}
      >
        Check Albums
      </Button>
    </div>
  );
}
