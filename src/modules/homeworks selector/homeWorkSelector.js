import React, { useState, useEffect } from 'react';

import Users from '../components/UsersList/Users.js';
import Stickers from '../components/StickersList/Stickers.js';
// import { Form } from 'react-bootstrap';
import UserProvider from '../contexts/userContext.js';
import ThemeProvider from '../contexts/themeContext.js';
import Landing from '../Landing/Components/Landing.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

export default function HomeWorkSelector() {
  // const [Selector, setSelector] = useState(
  //   localStorage.getItem('Selector' || 'first')
  // );
  const [VisibleHeader, setVisibleHeader] = useState(
    localStorage.getItem('VisibleHeader' || false)
  );
  useEffect(() => {
    localStorage.setItem('VisibleHeader', '');
  }, [VisibleHeader]);

  function changeVisibleHeader() {
    setVisibleHeader(!VisibleHeader);
  }

  // function onChange(e) {
  //   setSelector(e.target.value);
  // }
  // useEffect(() => {
  //   localStorage.setItem('Selector', Selector);
  // }, [Selector]);

  // function homewWorksOptions() {
  //   if (Selector === 'first') {
  //     return <Users />;
  //   } else if (Selector === 'Second') {
  //     return <Stickers />;
  //   } else {
  //     return <DashBoard />;
  //   }
  // }

  const headersStyle = {
    width: '100%',
    height: '2rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '0,2rem',
    marginBottom: '1rem',
    background: '#76b2cf',
  };
  console.log(typeof VisibleHeader);

  return (
    <Router>
      <ThemeProvider>
        <UserProvider>
          {VisibleHeader ? (
            <div style={headersStyle}>
              <Link to="/First">First Homework</Link>
              <Link to="/Second">Second Homework</Link>
            </div>
          ) : null}

          <Routes>
            <Route path="/First" element={<Users />} />
            <Route path="/Second" element={<Stickers />} />
            <Route
              path="*"
              element={<Landing visible={changeVisibleHeader} />}
            />
          </Routes>

          {/* <Form.Select
            aria-label="Default select example"
            style={{ margin: '1rem auto', width: '70%' }}
            value={Selector}
            onChange={onChange}
          >
            <option value="first">First Homework</option>
            <option value="Second">Second Homework</option>
            <option value="third">Third Homework</option>
          </Form.Select>
          {homewWorksOptions()} */}
        </UserProvider>
      </ThemeProvider>
    </Router>
  );
}

const headersStyle = {
  width: '100%',
  height: '2rem',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginTop: '0,2rem',
  marginBottom: '1rem',
  background: '#76b2cf',
};