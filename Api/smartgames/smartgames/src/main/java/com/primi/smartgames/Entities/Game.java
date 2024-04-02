package com.primi.smartgames.Entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.primi.smartgames.Entities.DTOs.GamesDTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity(name = "games")
@Table(name = "games")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "table_games")
@EqualsAndHashCode(of = "id")

public class Game {

    @Id
    private String id;

    private String name;
    private String description;
    private String imageLink;
    private double price;
    private List<String> platform;
    private List<String> stores;

    
    // construtor para o DTO
    public Game(GamesDTO data) {
        this.name = data.name();
        this.description = data.description();
        this.imageLink = data.imageLink();
        this.price = data.price();
        this.platform = data.platform();
        this.stores = data.stores();
    }
}
