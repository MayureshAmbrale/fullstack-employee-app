package com.employeeWeb.EmployeeManagement.controller;

import com.employeeWeb.EmployeeManagement.dto.EmployeeDto;
import com.employeeWeb.EmployeeManagement.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping("/post")
    public ResponseEntity<EmployeeDto> createNewEmployee(@RequestBody EmployeeDto employeeDto)
    {
        return ResponseEntity.ok(employeeService.createNewEmployee(employeeDto));
    }

}
