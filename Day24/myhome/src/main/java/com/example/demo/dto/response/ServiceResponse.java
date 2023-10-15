package com.example.demo.dto.response;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceResponse {
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