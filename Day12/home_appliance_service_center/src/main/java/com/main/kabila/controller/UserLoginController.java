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

import com.main.kabila.entity.UserLogin;
import com.main.kabila.service.UserLoginService;
@RequestMapping("/login")
@CrossOrigin("*")
@RestController
public class UserLoginController {
	@Autowired
	private UserLoginService userLoginService;
	@GetMapping("/getUserLogin")
	public List<UserLogin> getUserLogin(){
		return userLoginService.getUserLogin();
	}
	@GetMapping("/getUserLogin/{id}")
	public Optional<UserLogin> getUserLoginbyId(@PathVariable int id){
		return userLoginService.getUserLoginbyId(id);
	}

	@PostMapping("/postUserLogin")
	public void postUserLogin(@RequestBody UserLogin ule)
	{
		userLoginService.postUserLogin(ule);
	}
	@PutMapping("/putUserLogin/{id}")
	public void putUserLogin(@PathVariable int id,@RequestBody UserLogin sre)
	{
		sre.setUserLoginId(id);
		userLoginService.putUserLogin(sre);
	}
	@DeleteMapping("/delUserLogin/{id}")
	public void deleteUserLogin(@PathVariable int id)
	{
		userLoginService.deleteUserLogin(id);
	}
	

}