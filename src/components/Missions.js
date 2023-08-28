import { useSelector } from 'react-redux';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((store) => store.missions);

  if (isLoading) {
    return <p>The books list is loading!</p>;
  }
  if (error) {
    return (
      <p>
        Something went wrong!
        <br />
        { error }
      </p>
    );
  }
  if (missions.length !== 0) {
    return (
      <p>{JSON.stringify(missions)}</p>
    );
  }
  return <p>There are no missions available.</p>;
};

export default Missions;
