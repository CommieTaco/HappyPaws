package com.happypaws;

import models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import repository.UserRepository;

@SpringBootApplication
@RestController
public class HappyPawsApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(HappyPawsApplication.class, args);
    }

    @GetMapping("/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "World") String name) {

        return String.format("Oh no, it's %s!", name);
    }

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        this.userRepository.save(new User("Rolin", "Azmitia", "yeet@gmail.com"));
        this.userRepository.save(new User("Rick", "Sanchez", "sheshuan@gmail.com"));
        this.userRepository.save(new User("Hollow", "Knight", "holloheart@gmail.com"));
    }
}
