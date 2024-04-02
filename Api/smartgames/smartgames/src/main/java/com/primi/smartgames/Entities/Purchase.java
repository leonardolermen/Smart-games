package com.primi.smartgames.Entities;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "purchases")
@Document(collection ="table_purchases")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Purchase {
    // classe para salvar no banco de dados uma compra
    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "game")
    private Game game;

    // valor da compra
    private Double value;
    private LocalDateTime timestamp;
}
