package com.employeeWeb.EmployeeManagement.controller;

import com.employeeWeb.EmployeeManagement.dto.EmployeeDto;
import com.employeeWeb.EmployeeManagement.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/get/{email}")
    public ResponseEntity<EmployeeDto> getEmployeeByEmail(@PathVariable String email)
    {
        return  ResponseEntity.ok(employeeService.getEmployeeByEmail(email));
    }

    @PutMapping("/update/{email}")
    public ResponseEntity<EmployeeDto> updateEmployee(@RequestBody EmployeeDto employeeDto,@PathVariable String email)
    {
        return ResponseEntity.ok(employeeService.updateEmployee(employeeDto,email));
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<EmployeeDto>> getAllEmployee()
    {
        return  ResponseEntity.ok(employeeService.getAllEmployee());
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id)
    {
        try
        {
            employeeService.deleteEmployee(id);
            return new ResponseEntity("Employee deleted ", HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity("Employee not found", HttpStatus.NOT_FOUND);
        }

    }
}
