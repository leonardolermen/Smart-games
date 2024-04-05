package com.primi.smartgames.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.primi.smartgames.Entities.Purchase;
import com.primi.smartgames.Entities.DTOs.PurchaseDTO;
import com.primi.smartgames.Services.PurchaseService;

@RestController
@RequestMapping("/purchases")
public class PurchaseController {

    @Autowired
    private PurchaseService purchaseService;

    @CrossOrigin(origins = {"exp://192.168.86.98:8081", "http://localhost:3000"} )
    @PostMapping("/post")
    public ResponseEntity<Purchase> postPurchase(@RequestBody PurchaseDTO data){
        Purchase newPurchase = purchaseService.postPurchase(data);
        return new ResponseEntity<>(newPurchase, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = {"exp://192.168.86.98:8081", "http://localhost:3000"} )
    @GetMapping("/get")
    public ResponseEntity<List<Purchase>> getAllPurchases(){
        List<Purchase> purchases = purchaseService.getAllPurchases();
        return new ResponseEntity<>(purchases, HttpStatus.OK);
    }
    
}
