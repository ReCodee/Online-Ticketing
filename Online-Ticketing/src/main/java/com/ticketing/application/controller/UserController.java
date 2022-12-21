package com.ticketing.application.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticketing.application.exception.ResourceNotFoundException;
import com.ticketing.application.model.*;
import com.ticketing.application.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("users")
    public List < User > getUsers() {
        return this.userRepository.findAll();
    }
    
    @GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + userId));
		User u = userRepository.findByEmail(user.getEmail());
		return ResponseEntity.ok().body(u);
	}
    
    @PostMapping("/user")
	public ResponseEntity<Map<String, User>> getUserByEmail(@Valid @RequestBody User user)
			throws ResourceNotFoundException {
		//User user = userRepository.findById(userEmail)
			//	.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + userId));
		User u = userRepository.findByEmail(user.getEmail());
		Map<String, User> response = new HashMap<>();
		//response.put("deleted", Boolean.TRUE);
		if ( u == null ) {
			response.put("incorrect email", u);
    	} else if ( u.getPassword() == user.getPassword())  {
			response.put("incorrect password", u);
		} else {
			response.put("Success", u);		
		}
	
		return ResponseEntity.ok().body(response);
	}
    
    @PostMapping("/users")
	public ResponseEntity<Boolean> createUser(@Valid @RequestBody User user) {
    	User u = userRepository.findByEmail(user.getEmail());
    	Boolean response;
    	if ( u != null ) {
    		response = Boolean.FALSE;
    	} else {
    		userRepository.save(user);
    	   response = Boolean.TRUE;
    	}
		return ResponseEntity.ok().body(response);
	}
    
    @PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
			@Valid @RequestBody User userDetails) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		user.setEmail(userDetails.getEmail());
		user.setLastName(userDetails.getLastName());
		user.setFirstName(userDetails.getFirstName());
		final User updatedUser= userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
    
    @DeleteMapping("/users/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user= userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}