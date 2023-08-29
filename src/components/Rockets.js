import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Rockets.css';
import { cancelReservation, reserveRocket } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
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
              {rocket.reserved ? (
                <span className="reserved">Reserved</span>
              ) : (
                ''
              )}
              <span className="description">{rocket.description}</span>
            </div>

            {rocket.reserved && (
              <button
                type="button"
                className="cancel-reserve"
                onClick={() => dispatch(cancelReservation(rocket.id))}
              >
                Cancel Reservation
              </button>
            )}
            {!rocket.reserved && (
              <button
                type="button"
                className="reserve-rocket"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}

    </div>
  );
}

export default Rockets;
