package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.ServiceRequest;
import com.example.demo.repository.ServiceRequestRepository;

@Service
public class ServiceRequestService {
	@Autowired
	private ServiceRequestRepository rr;
	
	public List<ServiceRequest> getServiceRequestDetails(){
		return rr.findAll();
	}
	public Optional<ServiceRequest> getServiceRequest1Details(Long requestId) {
		return rr.findById(requestId);
	}
		
	public void saveServiceRequest(ServiceRequest re)
	{
		rr.save(re);
	}
	
	public void updateServiceRequest(ServiceRequest re)
	{
		rr.save(re);
	}
	
	public void deleteServiceRequest(Long id)
	{
		rr.deleteById(id);	
	}
	

}

