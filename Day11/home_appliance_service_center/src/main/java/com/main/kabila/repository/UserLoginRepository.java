package com.main.kabila.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.main.kabila.entity.UserLogin;
public interface UserLoginRepository extends JpaRepository<UserLogin, Integer>{

}
