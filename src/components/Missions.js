import { useSelector } from 'react-redux';

const Missions = () => {
  const { content } = useSelector((store) => store.missions);

  return (
    <div>
      <p>This is Missions Page!</p>
      {content}
    </div>
  );
};

export default Missions;
