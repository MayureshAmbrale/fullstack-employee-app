package com.employeeWeb.EmployeeManagement.service;

import com.employeeWeb.EmployeeManagement.dto.EmployeeDto;
import com.employeeWeb.EmployeeManagement.entity.EmployeeEntity;
import com.employeeWeb.EmployeeManagement.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;

    public EmployeeDto createNewEmployee(EmployeeDto employeeDto) {
        EmployeeEntity newEmployee = modelMapper.map(employeeDto,EmployeeEntity.class);
        EmployeeEntity savedEmployee = employeeRepository.save(newEmployee);
        return modelMapper.map(savedEmployee, EmployeeDto.class);
    }
}
