// RaceResultsPopup.js

import React from 'react';
import './RaceResultsPopup.css'; // Import the CSS file for RaceResultsPopup

const RaceResultsPopup = ({ onClose, onRestart }) => {
  // Dummy race results data (replace this with actual race results data)
  const raceResults = [
    { position: '1st', name: 'Usain Bolt', speed: '60 KM/H', startTime: '06:00', endTime: '10:05' },
    { position: '2nd', name: 'PT Usha', speed: '40 KM/H', startTime: '06:00', endTime: '12:02' },
    { position: '3rd', name: 'Bill Gates', speed: '20 KM/H', startTime: '06:00', endTime: '15:05' },
  ];

  return (
    <div className="race-results-popup">
      <div className="popup-content">
        <h2>SCORE CARD</h2>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Speed</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {raceResults.map((result, index) => (
              <tr key={index}>
                <td>{result.position}</td>
                <td>{result.name}</td>
                <td>{result.speed}</td>
                <td>{result.startTime}</td>
                <td>{result.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="popup-buttons">
          <button onClick={onClose}>Back to Home</button>
          <button onClick={onRestart}>Restart Race</button>
        </div>
      </div>
    </div>
  );
};

export default RaceResultsPopup;
