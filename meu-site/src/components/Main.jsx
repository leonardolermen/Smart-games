import React, { useState, useEffect } from "react";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import  "../styles/main.css";
import GameCard from './GameCard'; // cria o game card

export const Main = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:8080/games/get'); // chamando os dados da API
                setGames(response.data); 
            } catch (error) {
                console.error('Erro ao obter os dados dos jogos:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className="mainGames">
            <h1>All games</h1> 
            <Row> 
                {games.map((game, index) => (
                    <GameCard key={index} game={game} /> 
                ))}
            </Row>
        </div>
    );
};
