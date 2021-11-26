package com.happypaws.controllers;


import com.happypaws.models.Pet;
import com.happypaws.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @GetMapping("/pets")
    public List<Pet> getAllPets(){ return petRepository.findAll(); }

    @PostMapping("/pets")
    public Pet savePet(@RequestBody Pet pet){ return petRepository.save(pet); }

    @PutMapping("/pets")
    public Pet updatePet(@RequestBody Pet pet){ return petRepository.save(pet); }

    @DeleteMapping("/pets/{id}")
    public void deletePet(@PathVariable("id") long idPet){ petRepository.deleteById(idPet); }
}
