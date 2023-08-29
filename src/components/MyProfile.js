import { useSelector } from 'react-redux';
import styles from '../styles/MyProfile.module.css';

const MyProfile = () => {
  const { missions } = useSelector((store) => store.missions);

  return (
    <div className={styles.profile_page}>
      <div className={styles.my_missions}>
        <h2>My Missions</h2>
        <ul>
          {missions.filter((mission) => mission.reserved === true)
            .map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
        </ul>
      </div>
      <div className={styles.my_rockets}>
        <h2>My Rockets</h2>
      </div>
    </div>
  );
};

export default MyProfile;
