package com.happypaws.controllers;

import com.happypaws.models.User;
import com.happypaws.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("users")
    public @ResponseBody Iterable<User> getAllUsers(){ return userRepository.findAll(); }

    public @ResponseBody User getUser(long idUser){ return  userRepository.findById(idUser).get(); }

    public void updateUser(User user){ userRepository.save(user); }

    public void deleteUser(long idUser){ userRepository.deleteById(idUser); }

    public boolean existsByIdUser(long idUser){ return userRepository.existsById(idUser); }
}
