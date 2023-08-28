import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Missions.module.css';
import { joinMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((store) => store.missions);

  if (isLoading) {
    return <p className={styles.loading}>The missions list is loading!</p>;
  }
  if (error) {
    return (
      <p className={styles.error}>
        Something went wrong!
        <br />
        { error }
      </p>
    );
  }
  if (missions.length !== 0) {
    return (
      <table className={styles.missions}>
        <thead>
          <tr>
            <th>Misson</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((item) => (
            <tr key={item.mission_id}>
              <td className={styles.name}>{item.mission_name}</td>
              <td className={styles.description}>{item.description}</td>
              <td>
                <span className={styles.is_member}>not a member</span>
              </td>
              <td>
                <button
                  type="button"
                  className={styles.join_mission}
                  onClick={() => dispatch(joinMission(item.mission_id))}
                >
                  join mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return <p>There are no missions available.</p>;
};

export default Missions;
