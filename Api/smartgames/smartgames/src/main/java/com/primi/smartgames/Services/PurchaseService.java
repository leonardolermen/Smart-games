package com.primi.smartgames.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.primi.smartgames.Entities.Purchase;
import com.primi.smartgames.Entities.DTOs.PurchaseDTO;
import com.primi.smartgames.Repositories.PurchaseRepository;

@Service
public class PurchaseService {
    
    @Autowired
    private PurchaseRepository purchaseRepository;

    public Purchase postPurchase(PurchaseDTO data){
        Purchase newPurchase = new Purchase(data);
        return this.purchaseRepository.save(newPurchase);
    }

    public List<Purchase> getAllPurchases(){
        return this.purchaseRepository.findAll();
    }
}
