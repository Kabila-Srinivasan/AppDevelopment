package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Contact;
import com.example.demo.service.ContactService;
@RestController
public class ContactController {
	@Autowired
	private ContactService cs;
	
	 @GetMapping("/getcontact")
	 public List<Contact> getContactDetails()
	 {
		 return cs.getContactDetails();
	 }
	 @GetMapping("/getcontact/{cId}")
		public Optional<Contact> getContact1Details(@PathVariable Long cId){
			return cs.getContact1Details(cId);
		}	
	 @PostMapping("/postcontact")
	 public void saveData(@RequestBody Contact ce)
	 {
		 cs.saveContact(ce);
	 }
	 
	 @PutMapping("/putcontact/{cId}")
	 public void updateData(@RequestBody Contact ce,@PathVariable Long cId)
	 {
		 ce.setCId(cId);
		 cs.updateContact(ce);
	 }
	 
	 @DeleteMapping("/deletecontact/{cId}")
	 public void deleteData(@PathVariable Long cId)
	 {
		 cs.deleteContact(cId);
	 }

}
