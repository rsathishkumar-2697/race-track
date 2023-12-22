import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ParticipantEntry.css';

const ParticipantEntry = () => {
  const history = useHistory();
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [startTime, setStartTime] = useState('');

  

  const addParticipant = () => {
    if (participants.length < 10) {
      const newParticipant = {
        name: name,
        speed: speed,
        startTime: startTime,
        endTime: '-',
      };
      setParticipants([...participants, newParticipant]);
      setName('');
      setSpeed('');
      setStartTime('');
    } else {
      alert('Maximum number of participants reached (10)');
    }
  };

  const startRace = () => {
    // Implement race start functionality here
    console.log('Race started!');
    history.push('/race-track'); // Redirect to the race track page
  };

  return (
    <div className="participant-entry">
      <div className="runner-details">
        <h1>RUNNER DETAILS</h1>
        <p>*You can add max 10 participants</p>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="speed">Speed</label>
        <input
          type="text"
          id="speed"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
        <label htmlFor="startTime">Start Time</label>
        <input
          type="text"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <button className='add-runner-button' onClick={addParticipant}>+ ADD RUNNER</button>
      </div>
      <div className="list-of-participants">
        <h2>LIST OF PARTICIPANTS</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Speed</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index}>
                <td>{participant.name}</td>
                <td>{participant.speed}</td>
                <td>{participant.startTime}</td>
                <td>{participant.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='add-startrace-button'  onClick={startRace}>Start Race &rarr;</button>
      </div>
    </div>
  );
};

export default ParticipantEntry;
