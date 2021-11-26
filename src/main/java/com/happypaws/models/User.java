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

    private String Name;
    private String DUI;
    private String Username;
    private String Password;
    private String Email;

    public User(){
    }

    public User(long ID, String name, String DUI, String username, String password, String email) {
        this.ID = ID;
        Name = name;
        this.DUI = DUI;
        Username = username;
        Password = password;
        Email = email;
    }
}
