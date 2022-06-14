import React from 'react';

import Users from '../UsersList/components/Users.js';
import Stickers from '../StickersList/components/Stickers.js';
// import { Form } from 'react-bootstrap';
import UserProvider from '../contexts/userContext.js';
import ThemeProvider from '../contexts/themeContext.js';
import Albums from '../Albums/Components/Albums.js';
import Landing from '../Landing/Components/Landing.js';
import NotFound from './notFound.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

export default function HomeWorkSelector() {
  return (
    <Router>
      <ThemeProvider>
        <UserProvider>
          <Routes>
            <Route path="/Users" element={<Users />} />
            <Route path="/Stickers" element={<Stickers />} />
            <Route path="/Albums/*" element={<Albums />} />
            <Route path="/Home" element={<Landing />} />
            <Route
              path="/"
              element={<Navigate to="/Home" replace />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </Router>
  );
}

// const [Selector, setSelector] = useState(
//   localStorage.getItem('Selector' || 'first')
// );

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

{
  /* <Form.Select
            aria-label="Default select example"
            style={{ margin: '1rem auto', width: '70%' }}
            value={Selector}
            onChange={onChange}
          >
            <option value="first">First Homework</option>
            <option value="Second">Second Homework</option>
            <option value="third">Third Homework</option>
          </Form.Select>
          {homewWorksOptions()} */
}
