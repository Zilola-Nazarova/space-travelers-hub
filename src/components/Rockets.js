import React from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const { rockets } = useSelector((store) => store.rockets);
  return (
    <div>
      <h1>
        Rockets-
        {rockets}
      </h1>
    </div>
  );
}

export default Rockets;
