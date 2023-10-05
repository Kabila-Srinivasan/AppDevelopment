package com.main.kabila.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.main.kabila.entity.UserRegistration;
public interface UserRegistrationRepository extends JpaRepository<UserRegistration, Integer>{

}