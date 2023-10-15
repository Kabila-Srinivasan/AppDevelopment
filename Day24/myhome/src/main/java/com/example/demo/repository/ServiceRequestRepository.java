package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.ServiceRequest;
@Repository
public interface ServiceRequestRepository extends JpaRepository<ServiceRequest, Long>{

}