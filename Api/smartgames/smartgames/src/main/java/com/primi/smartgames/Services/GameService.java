package com.primi.smartgames.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.primi.smartgames.Entities.Game;
import com.primi.smartgames.Entities.DTOs.GamesDTO;
import com.primi.smartgames.Entities.DTOs.UpdateGameDTO;
import com.primi.smartgames.Repositories.GameRepository;

@Service
public class GameService {

    @Autowired
    private GameRepository gamesRepository;

    // postar um novo game no banco de dados
    public Game postGame(GamesDTO data) {
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

    // update game
    public Game updateGame(UpdateGameDTO gameDto) throws NotFoundException {
        String gameId = gameDto.id();
        Optional<Game> optionalGame = gamesRepository.findById(gameId);
        if (optionalGame.isPresent()) {
            Game existingGame = optionalGame.get();

            existingGame.setName(gameDto.name());
            existingGame.setPrice(gameDto.price());
            existingGame.setDescription(gameDto.description());

            return gamesRepository.save(existingGame);
        } else {
            throw new NotFoundException();
        }
    }

    // delete game
    public void deleteGame(String gameId) throws NotFoundException {
        Optional<Game> optionalGame = gamesRepository.findById(gameId);
        if (optionalGame.isPresent()) {
            gamesRepository.deleteById(gameId);
        } else {
            throw new NotFoundException();
        }

    }
}
