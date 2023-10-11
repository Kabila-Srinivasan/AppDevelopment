package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Feedback;
import com.example.demo.repository.FeedbackRepository;

@Service
public class FeedbackService {
	@Autowired
	private FeedbackRepository fr;
	
	public List<Feedback> getFeedbackDetails(){
		return fr.findAll();
	}
	public Optional<Feedback> getFeedback1Details(Long fId) {
		return fr.findById(fId);
	}
	public void saveFeedback(Feedback fe)
	{
		fr.save(fe);
	}
	
	public void updateFeedback(Feedback fe)
	{
		fr.save(fe);
	}
	
	public void deleteFeedback(Long fId)
	{
		fr.deleteById(fId);	
	}
	
	}
