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

import com.main.kabila.entity.AdminLogin;
import com.main.kabila.service.AdminLoginService;
@RequestMapping("/adminlogin")
@CrossOrigin
@RestController
public class AdminLoginController {
	@Autowired
	private AdminLoginService adminLoginService;
	@GetMapping("/getAdminLogin")
	public List<AdminLogin> getAdminLogin(){
		return adminLoginService.getAdminLogin();
	}
	@GetMapping("/getAdminLogin/{id}")
	public Optional<AdminLogin> getAdminLoginbyId(@PathVariable int id){
		return adminLoginService.getAdminLoginbyId(id);
	}
	@PostMapping("/postAdminLogin")
	public void postAdminLogin(@RequestBody AdminLogin ale) {
		adminLoginService.postAdminLogin(ale);
	}
	@PutMapping("/putAdminLogin/{id}")
	public void putAdminLogin(@PathVariable int id,@RequestBody AdminLogin tre)
	{
		tre.setAdminId(id);
		adminLoginService.putAdminLogin(tre);
	}
	@DeleteMapping("/delAdminLogin/{id}")
	public void deleteAdminLogin(@PathVariable int id)
	{
		adminLoginService.deleteAdminLogin(id);
	}

}