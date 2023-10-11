package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Contact;
import com.example.demo.service.ContactService;

@RestController
@RequestMapping("/contact")

public class ContactController {
	@Autowired
	private ContactService contactService;

	@RequestMapping("/contact/cId}")
	public List<Contact> getContacts(@PathVariable("cId") Long userId) {
		return this.contactService.getContactsOfUser(userId);
	}

}
