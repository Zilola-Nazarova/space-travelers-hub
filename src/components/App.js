import * as React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyProfile from './MyProfile';
import NotMatch from './NotMatch';
import Layout from './Layout';
import MissionsPage from '../routes/MissionsPage';
import Rockets from './Rockets';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import { getMissions } from '../redux/missions/missionsSlice';
import '../styles/App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<MissionsPage />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
