package com.happypaws.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "User")

@Getter @Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_user")
    private long ID;

    @Column(name = "Name")
    private String name;
    @Column(name = "DUI")
    private String DUI;
    @Column(name = "Username")
    private String userName;
    @Column(name = "Password")
    private String password;
    @Column(name = "Email   ")
    private String email;

    public User(){
    }

    public User(String name, String DUI, String username, String password, String email) {
        this.name = name;
        this.DUI = DUI;
        this.userName = username;
        this.password = password;
        this.email = email;
    }
}
