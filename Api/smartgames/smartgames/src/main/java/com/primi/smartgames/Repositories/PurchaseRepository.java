package com.primi.smartgames.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.primi.smartgames.Entities.Purchase;

@Repository
public interface PurchaseRepository extends MongoRepository <Purchase, String> {
    
}
