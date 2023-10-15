package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceRequest {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long requestId;
	private String name;
	private String mobileNo;
	private String emailId;
	private String serviceType;
	private String applianceType;
	private String model;
	private String address;
	private String city;
	private String state;
	private String pincode;

}
