package com.happypaws;

import com.happypaws.models.User;
import com.happypaws.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HappyPawsApplication {

    public static void main(String[] args) {

        SpringApplication.run(HappyPawsApplication.class, args);
    }
}
