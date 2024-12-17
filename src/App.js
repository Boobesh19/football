import React, { useState } from 'react';
import './App.css';

// Team logos
const teamA = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCA6cRSb-8J7jRlfk2OiQqBhxpjQhy1TX1RQ&s';
const teamB = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdkXZ2bqkZA0QLu4s0mM9uF7X5ytdMYVQdQ&s';

// Main Component
const PenaltyGame = () => {
  const [teamAScore, setTeamAScore] = useState([]);
  const [teamBScore, setTeamBScore] = useState([]);
  const [winner, setWinner] = useState(null);

  // Function to generate a random goal
  const getRandomGoal = () => Math.random() < 0.5 ? 1 : 0;

  const playGame = () => {
    let newTeamAScore = [];
    let newTeamBScore = [];

    for (let i = 0; i < 5; i++) {
      newTeamAScore.push(getRandomGoal());
      newTeamBScore.push(getRandomGoal());
    }

    setTeamAScore(newTeamAScore);
    setTeamBScore(newTeamBScore);

    const teamAGoals = newTeamAScore.reduce((sum, val) => sum + val, 0);
    const teamBGoals = newTeamBScore.reduce((sum, val) => sum + val, 0);

    if (teamAGoals > teamBGoals) {
      setWinner(' Kerala team Wins!');
    } else if (teamBGoals > teamAGoals) {
      setWinner(' Gujarat team Wins!');
    } else {
      setWinner("It's a Draw!");
    }
  };

  return (
    <div className="penalty-game">
      <h1>Football Penalty Shootout</h1>
      <div className="teams">
        <div className="team">
          <img src={teamA} alt=" Kerala team " />
          <h2>Kerala team</h2>
          <div className="scoreboard">
            {teamAScore.map((goal, index) => (
              <div key={index} className={goal ? 'dot goal' : 'dot miss'}></div>
            ))}
          </div>
        </div>
        <div className="team">
          <img src={teamB} alt=" Gujarat team " />
          <h2>Gujarat team</h2>
          <div className="scoreboard">
            {teamBScore.map((goal, index) => (
              <div key={index} className={goal ? 'dot goal' : 'dot miss'}></div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={playGame} className="start-button">Start Game</button>
      {winner && <h2 className="winner">{winner}</h2>}
    </div>
  );
};

export default PenaltyGame;
