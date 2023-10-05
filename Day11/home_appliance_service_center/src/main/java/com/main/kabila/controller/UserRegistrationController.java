package com.main.kabila.controller;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.kabila.entity.UserRegistration;
import com.main.kabila.service.UserRegistrationService;
@RequestMapping("/register")
@CrossOrigin("*")
@RestController
public class UserRegistrationController {
	@Autowired
	private UserRegistrationService userRegistrationService;
	@GetMapping("/getUserRegister")
	public List<UserRegistration> getUserRegister(){
		return userRegistrationService.getUserRegister();
	}
	@GetMapping("/getUserRegister/{id}")
	public Optional<UserRegistration> getUserRegisterbyId(@PathVariable int id){
		return userRegistrationService.getUserRegisterbyId(id);
	}
	@PostMapping("/postUserRegister")
	public void postUserRegister(@RequestBody UserRegistration ure) {
		userRegistrationService.postUserRegister(ure);
	}
	@PutMapping("/putUserRegister/{id}")
	public void putUserRegister(@PathVariable int id,@RequestBody UserRegistration ure)
	{
		ure.setUserRegisterId(id);
		userRegistrationService.putUserRegister(ure);
	}
	@DeleteMapping("/delUserRegister/{id}")
	public void deleteUserRegister(@PathVariable int id)
	{
		userRegistrationService.deleteUserRegister(id);
	}
	

}
