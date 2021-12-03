package com.happypaws.controllers;

import com.happypaws.models.User;
import com.happypaws.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers(){ return userRepository.findAll(); }

//    @RequestMapping(value = "/user/search/{id}", method = RequestMethod.GET)
//    public User getUser(@PathVariable("id") long idUser){
//       return userRepository.findOne(idUser);
//    }

    @PostMapping("/saveUser")
    public User saveUser(@RequestBody final User user) {
        userRepository.save(user);
        return userRepository.save(user);
    }

    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user){ return userRepository.save(user); }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") long idUser){ userRepository.deleteById(idUser); }

}
