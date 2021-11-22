package repository;

import models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.parser.Entity;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {


}
