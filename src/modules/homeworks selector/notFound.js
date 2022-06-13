import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default function NotFound() {
  return (
    <Alert key={'danger'} variant={'danger'}>
      <h1>Page doesn't exist</h1>
      Please visit <Link to="/">Home page</Link>
    </Alert>
  );
}
