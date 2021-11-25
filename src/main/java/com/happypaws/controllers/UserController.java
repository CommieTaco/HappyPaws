package com.happypaws.controllers;

import com.happypaws.models.User;
import com.happypaws.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@CrossOrigin(origins = "http://localhost:3000/")
@Controller
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("users")
    public @ResponseBody Iterable<User> getAllUsers(){
        return userRepository.findAll();
    }
}
