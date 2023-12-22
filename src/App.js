// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ParticipantEntry from './Components/FirstPage/ParticipantEntry'; // Assuming the path to your ParticipantEntry component
import RaceTrackPage from './Components/SecondPage/RaceTrackPage'; // Assuming the path to your RaceTrackPage component
import RaceResultsPopup from './Components/ThirdPage/RaceResultsPopup'; // Assuming the path to your RaceResultsPopup component
import './App.css'; // Import the main App styles

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isRaceStarted, setIsRaceStarted] = useState(false);
  const [participants, setParticipants] = useState([]); // Assuming this state holds participant data

  const closePopup = () => {
    setShowPopup(false);
  };

  const startRace = () => {
    setIsRaceStarted(true);
    // Perform any other necessary logic when starting the race
  };

  const restartRace = () => {
    // Logic to restart the race
    console.log('Race restarted!');
    // Implement your logic to reset the race here
  };

  return (
    <Router>
    <div className="App">
      
      <ParticipantEntry setParticipants={setParticipants} />
      <RaceTrackPage participants={participants} />
      <button onClick={() => setShowPopup(true)}>Show Race Results</button>
      {showPopup && (
        <RaceResultsPopup
          results={participants} // Pass race results data here
          onClose={closePopup}
          onRestart={restartRace}
        />
      )}
    </div>
    </Router>
  );
};

export default App;
