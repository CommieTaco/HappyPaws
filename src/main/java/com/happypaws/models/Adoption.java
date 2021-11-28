package com.happypaws.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Adoption")
@Getter @Setter
public class Adoption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_adoption")
    private Long ID;

    private Date Date;
    private long ID_pet;
    private long ID_user;

    public Adoption(){ super(); }

    public Adoption(Long ID, java.util.Date date, long ID_pet, long ID_user) {
        this.ID = ID;
        Date = date;
        this.ID_pet = ID_pet;
        this.ID_user = ID_user;
    }
}
