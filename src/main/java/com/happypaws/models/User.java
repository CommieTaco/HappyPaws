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
    private String Name;
    @Column(name = "DUI")
    private String DUI;
    @Column(name = "Username")
    private String Username;
    @Column(name = "Password")
    private String Password;
    @Column(name = "Email")
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
