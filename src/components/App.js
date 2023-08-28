import * as React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import MyProfile from './MyProfile';
import NotMatch from './NotMatch';
import Layout from './Layout';
import Missions from './Missions';
import Rockets from './Rockets';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="profile" element={<MyProfile />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default App;
