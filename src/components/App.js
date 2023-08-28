import * as React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMissions } from '../redux/missions/missionsSlice';
import MyProfile from './MyProfile';
import NotMatch from './NotMatch';
import Layout from './Layout';
import MissionsPage from '../routes/MissionsPage';
import Rockets from './Rockets';
import '../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="missions" element={<MissionsPage />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
