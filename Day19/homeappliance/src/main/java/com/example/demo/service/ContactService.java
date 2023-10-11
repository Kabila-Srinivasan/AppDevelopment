package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;
@Service
public class ContactService {
	@Autowired
	private ContactRepository cr;
	
	public List<Contact> getContactDetails(){
		return cr.findAll();
	}
	public Optional<Contact> getContact1Details(Long cId) {
		return cr.findById(cId);
	}
	public void saveContact(Contact ce)
	{
		cr.save(ce);
	}
	
	public void updateContact(Contact ce)
	{
		cr.save(ce);
	}
	
	public void deleteContact(Long cId)
	{
		cr.deleteById(cId);	
	}
	

}
