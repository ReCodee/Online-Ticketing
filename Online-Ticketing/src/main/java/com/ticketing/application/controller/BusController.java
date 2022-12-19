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
import com.ticketing.application.repository.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/vehicle/")
public class BusController {

    @Autowired
    private BusRepository busRepository;

    @GetMapping("bus")
    public List < Bus > getAllBuses() {
        return this.busRepository.findAll();
    }
    
    @GetMapping("/bus/{id}")
	public ResponseEntity<Bus> getBusById(@PathVariable(value = "id") Integer busId)
			throws ResourceNotFoundException {
		Bus bus = busRepository.findById(busId)
				.orElseThrow(() -> new ResourceNotFoundException("Bus not found for this id :: " + busId));
		return ResponseEntity.ok().body(bus);
	}
    
    @PostMapping("/bus")
	public Bus createBus(@Valid @RequestBody Bus bus) {
		return busRepository.save(bus);
	}
    
    @PutMapping("/bus/{id}")
	public ResponseEntity<Bus> updateBus(@PathVariable(value = "id") Integer busId,
			@Valid @RequestBody Bus busDetails) throws ResourceNotFoundException {
		Bus bus = busRepository.findById(busId)
				.orElseThrow(() -> new ResourceNotFoundException("Bus not found for this id :: " + busId));

		bus.setUDT(busDetails.getUDT());
		bus.setType(busDetails.getType());
		final Bus updatedBus= busRepository.save(bus);
		return ResponseEntity.ok(updatedBus);
	}
    
    @DeleteMapping("/bus/{id}")
	public Map<String, Boolean> deleteBus(@PathVariable(value = "id") Integer busId)
			throws ResourceNotFoundException {
		Bus bus= busRepository.findById(busId)
				.orElseThrow(() -> new ResourceNotFoundException("Bus not found for this id :: " + busId));

		busRepository.delete(bus);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}