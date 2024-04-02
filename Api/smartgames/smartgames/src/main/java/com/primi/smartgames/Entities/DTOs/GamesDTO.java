package com.primi.smartgames.Entities.DTOs;

import java.util.List;

public record GamesDTO(
        String name,
        String description,
        String imageLink,
        double price,
        List<String> platform,
        List<String> stores) {
}
