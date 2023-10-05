package com.main.kabila.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user_register")
public class UserRegistration {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userRegisterId;
	private String userName;
	private String userEmail;
	private String userUserName;
	private String userMobile;
	private String userPassword;
	private String userConfirmPassword;


}
