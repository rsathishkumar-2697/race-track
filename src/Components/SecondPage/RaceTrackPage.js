// RaceTrackPage.js

import React, { useState, useEffect } from 'react';
import './RaceTrackStyle.css';

const RaceTrackPage = ({ participants }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [participantPositions, setParticipantPositions] = useState([]);

  // Function to format elapsed time to "mm:ss"
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Function to update participant positions based on their speed and elapsed time
  const updateParticipantPositions = () => {
    const updatedPositions = participants.map((participant) => {
      const distanceCovered = elapsedTime * (parseFloat(participant.speed) / 3600); // Convert speed from km/h to m/s
      return { ...participant, distanceCovered };
    });
    setParticipantPositions(updatedPositions);
  };

  // Logic to handle the race
  useEffect(() => {
    const raceInterval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
      updateParticipantPositions(); // Update participant positions
    }, 1000); // Update time every second

    // Clean up interval on unmount or race end
    return () => clearInterval(raceInterval);
  }, []);

  return (
    <div className="race-track-page">
      {/* Display elapsed time */}
      <h2>Elapsed Time: {formatTime(elapsedTime)}</h2>
      {/* Render the race track lanes for each participant */}
      <div className="race-track">
        {participantPositions.map((participant, index) => (
          <div key={index} className="participant-lane">
            <p>{participant.name}</p>
            {/* Render participant's progress or position on the track */}
            <div className="track">
              <div
                className="runner"
                style={{ marginLeft: `${participant.distanceCovered}px` }}
              >
                🏃‍♂️
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceTrackPage;
