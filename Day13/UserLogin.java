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
@Table(name="user_login")
public class UserLogin {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userLoginId;
	private String Username;
	private String Password;


}