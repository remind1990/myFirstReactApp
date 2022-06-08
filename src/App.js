import React from 'react';
import './modules/components/StickersList/stickersGlobal.css';

import './modules/components/UsersList/usersListCompleteCss.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeWorkSelector from './modules/homeworks selector/homeWorkSelector.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomeWorkSelector />} />)
      </Routes>
    </Router>
  );
}
