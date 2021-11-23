package com.happypaws.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "email")
    private String email;

    public User(){

    }

    public User(String firstName, String lastName, String email){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
