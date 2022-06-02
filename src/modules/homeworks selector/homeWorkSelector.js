import React, { useState, useEffect } from 'react';
import Users from '../components/UsersList/Users.js';
import Stickers from '../components/StickersList/Stickers.js';
import { Form } from 'react-bootstrap';
import UserProvider from '../contexts/userContext.js';
import ThemeProvider from '../contexts/themeContext.js';

export default function HomeWorkSelector() {
  const [Selector, setSelector] = useState(
    localStorage.getItem('Selector' || 'first')
  );

  function onChange(e) {
    setSelector(e.target.value);
  }
  useEffect(() => {
    localStorage.setItem('Selector', Selector);
  }, [Selector]);
  return (
    <ThemeProvider>
      <UserProvider>
        <>
          <Form.Select
            aria-label="Default select example"
            style={{ margin: '1rem auto', width: '70%' }}
            value={Selector}
            onChange={onChange}
          >
            <option value="first">First Homework</option>
            <option value="Second">Second Homework</option>
          </Form.Select>
          {Selector === 'first' ? <Users /> : <Stickers />}
        </>
      </UserProvider>
    </ThemeProvider>
  );
}
