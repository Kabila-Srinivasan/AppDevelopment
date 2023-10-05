package com.main.kabila.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.kabila.entity.AdminLogin;
import com.main.kabila.repository.AdminLoginRepository;

@Service
public class AdminLoginService {
	@Autowired
	private AdminLoginRepository adminLoginRepository;
	public List<AdminLogin> getAdminLogin(){
		return adminLoginRepository.findAll();
	}
	public Optional<AdminLogin> getAdminLoginbyId(int id){
		return adminLoginRepository.findById(id);
	}
	public void postAdminLogin(AdminLogin ale) {
		adminLoginRepository.save(ale);
	}
	public AdminLogin putAdminLogin(AdminLogin tre) {
		return adminLoginRepository.save(tre);
	}
	public void deleteAdminLogin(int id) {
		adminLoginRepository.deleteById(id);
	}

}