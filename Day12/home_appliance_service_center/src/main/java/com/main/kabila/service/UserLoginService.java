package com.main.kabila.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.kabila.entity.UserLogin;

import com.main.kabila.repository.UserLoginRepository;


@Service
public class UserLoginService {

	@Autowired
	private UserLoginRepository userLoginRepository;
	public List<UserLogin> getUserLogin(){
		return userLoginRepository.findAll();
	}
	public Optional<UserLogin> getUserLoginbyId(int id){
		return userLoginRepository.findById(id);
	}
	public void postUserLogin(UserLogin ulr) {
		userLoginRepository.save(ulr);
	}
	public UserLogin putUserLogin(UserLogin sre) {
		return userLoginRepository.save(sre);
	}
	public void deleteUserLogin(int id) {
		userLoginRepository.deleteById(id);
	}
}