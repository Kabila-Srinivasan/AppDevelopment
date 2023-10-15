package com.example.demo.entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {
    private Long fid;
    private String username;
    private String useremail;
    private String mobile;
    private String comment;
}