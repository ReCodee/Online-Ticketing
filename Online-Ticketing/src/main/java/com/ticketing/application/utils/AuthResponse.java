package com.ticketing.application.utils;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.ResponseBody;

import com.ticketing.application.model.*;

@ResponseBody
public class AuthResponse {
    
	Boolean result;
    String message;
    
	public AuthResponse(Boolean result, String message) {
		super();
		this.result = result;
		this.message = message;
	}
    
    
}
