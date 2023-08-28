import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Rockets.css';

function Rockets() {
  const { rockets, isLoading } = useSelector((store) => store.rockets);

  if (isLoading) {
    return (
      <div>Loading......</div>
    );
  }
  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <div className="image-section">
            <img src={rocket.image} alt="" className="image" />
          </div>
          <div className="rocket-details">
            <h2>{rocket.name}</h2>
            <div className="details">
              <span className="description">{rocket.description}</span>
            </div>

            <button
              className="reserve-rocket"
              type="button"
            >
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Rockets;
