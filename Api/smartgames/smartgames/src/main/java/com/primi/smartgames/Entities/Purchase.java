package com.primi.smartgames.Entities;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;

import com.primi.smartgames.Entities.DTOs.PurchaseDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
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
    @JoinColumn(name = "purchase")
    @JoinTable(name = "tabe_purchases")
    private String game;

    // valor da compra
    private Double value;
    private LocalDateTime timestamp;

    public Purchase(PurchaseDTO data) {
        this.game = data.gameName();
        this.value = data.value();
        this.timestamp = LocalDateTime.now();
    }
}
