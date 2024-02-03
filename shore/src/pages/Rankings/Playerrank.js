// PlayerRankings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlayerRankings = () => {
    const [playerRankings, setPlayerRankings] = useState([]);

    useEffect(() => {
        // Fetch player rankings data from backend API
        axios.get('/api/playerRankings')
            .then(response => {
                setPlayerRankings(response.data);
            })
            .catch(error => {
                console.error('Error fetching player rankings:', error);
            });
    }, []);

    return (
        <div>
            <h2>Player Rankings</h2>
            <ul>
                {playerRankings.map((player, index) => (
                    <li key={index}>{player.name}: {player.rank}</li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerRankings;
