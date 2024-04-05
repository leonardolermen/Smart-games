package com.primi.smartgames.Repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.primi.smartgames.Entities.Game;

@Repository
public interface GameRepository extends MongoRepository <Game, String> {
   Game findByName(String name);
   Optional<Game> findById(String id);
}
