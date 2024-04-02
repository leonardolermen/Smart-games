package com.primi.smartgames.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.primi.smartgames.Entities.Game;
import com.primi.smartgames.Entities.DTOs.GamesDTO;
import com.primi.smartgames.Services.GameService;

@RestController
@RequestMapping("/games")
public class GamesController {

    @Autowired
    private GameService gameService;
    
    // mapp para adicionar os games ao banco de dados
    @PostMapping("/post")
    public ResponseEntity<Game> postGame(@RequestBody GamesDTO game){
         Game newGame = gameService.postGame(game);
        return new ResponseEntity<>(newGame, HttpStatus.CREATED);
    }

    // mapp para obter todos os games no banco de dados
    @GetMapping("/get")
    public ResponseEntity<List<Game>> getAllGames(){
        List<Game> games = this.gameService.getAllGames();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Game> getGamesByName(@PathVariable String name){
        Game game = this.gameService.getByName(name);
        return new ResponseEntity<>(game, HttpStatus.OK);
    }
}
