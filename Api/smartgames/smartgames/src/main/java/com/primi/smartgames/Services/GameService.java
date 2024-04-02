package com.primi.smartgames.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.primi.smartgames.Entities.Game;
import com.primi.smartgames.Entities.DTOs.GamesDTO;
import com.primi.smartgames.Repositories.GameRepository;

@Service
public class GameService {

    @Autowired
    private GameRepository gamesRepository;

    // postar um novo game no banco de dados
    public Game postGame(GamesDTO data){
        Game newGame = new Game(data);
        gamesRepository.save(newGame);
        return newGame;
    }

    // listar todos os games
    public List<Game> getAllGames() {
        return this.gamesRepository.findAll();   
    }

    // achar um game pelo nome
    public Game getByName(String name) {
       return this.gamesRepository.findByName(name);
    }
}
