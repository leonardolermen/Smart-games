package com.primi.smartgames.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.primi.smartgames.Entities.Game;
import com.primi.smartgames.Entities.DTOs.GamesDTO;
import com.primi.smartgames.Entities.DTOs.UpdateGameDTO;
import com.primi.smartgames.Services.GameService;

@RestController
@RequestMapping("/games")
public class GamesController {

    @Autowired
    private GameService gameService;
    
    // mapp para adicionar os games ao banco de dados
    @CrossOrigin(origins = {"exp://192.168.86.98:8081", "http://localhost:3000"} )
    @PostMapping("/post")
    public ResponseEntity<Game> postGame(@RequestBody GamesDTO game){
         Game newGame = gameService.postGame(game);
        return new ResponseEntity<>(newGame, HttpStatus.CREATED);
    }

    // mapp para obter todos os games no banco de dados
    @CrossOrigin(origins = {"exp://192.168.86.98:8081", "http://localhost:3000"} )
    @GetMapping("/get")
    public ResponseEntity<List<Game>> getAllGames(){
        List<Game> games = this.gameService.getAllGames();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    // Mapp para dar update no game
    @CrossOrigin(origins = {"exp://192.168.86.98:8081", "http://localhost:3000"})
    @PutMapping("/update")
    public ResponseEntity<Game> updateGame(@RequestBody UpdateGameDTO game) throws NotFoundException{
         Game updatedGame = gameService.updateGame(game);
        return new ResponseEntity<>(updatedGame, HttpStatus.OK);
    }

    // Mapp para deletar
    @CrossOrigin(origins = {"exp://192.168.86.98:8081", "http://localhost:3000"})
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteGame(@RequestParam String gameId) throws NotFoundException{
        gameService.deleteGame(gameId);
        return new ResponseEntity<>("Game deleted successfully", HttpStatus.OK);
    }
}


