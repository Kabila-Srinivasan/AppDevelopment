package com.main.kabila.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.kabila.entity.UserRegistration;
import com.main.kabila.repository.UserRegistrationRepository;

@Service
public class UserRegistrationService {

	@Autowired
	private UserRegistrationRepository userRegistrationRepository;
	public List<UserRegistration> getUserRegister(){
		return userRegistrationRepository.findAll();
	}
	public Optional<UserRegistration> getUserRegisterbyId(int id)
	{
		return userRegistrationRepository.findById(id);
	}
	public void postUserRegister(UserRegistration ure) {
		userRegistrationRepository.save(ure);
	}
	public UserRegistration putUserRegister(UserRegistration ure) {
		return userRegistrationRepository.save(ure);
	}
	public void deleteUserRegister(int id) {
		userRegistrationRepository.deleteById(id);
	}
}
