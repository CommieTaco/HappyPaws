package com.happypaws.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ID_user;

    private String Name;
    private String DUI;
    private String Username;
    private String Password;
    private String Email;

    public User(){
        super();
    }

    public User(long ID, String name, String DUI, String username, String password, String email) {
        this.ID_user = ID;
        this.Name = name;
        this.DUI = DUI;
        this.Username = username;
        this.Password = password;
        this.Email = email;
    }
}
