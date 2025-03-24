package com.employeeWeb.EmployeeManagement.service;

import com.employeeWeb.EmployeeManagement.dto.EmployeeDto;
import com.employeeWeb.EmployeeManagement.entity.EmployeeEntity;
import com.employeeWeb.EmployeeManagement.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final ModelMapper modelMapper;

    public EmployeeDto createNewEmployee(EmployeeDto employeeDto) {
        EmployeeEntity employee = employeeRepository.findByEmail(employeeDto.getEmail()).orElse(null);

        if(employee == null)
        {
            EmployeeEntity newEmployee = modelMapper.map(employeeDto,EmployeeEntity.class);
            EmployeeEntity savedEmployee = employeeRepository.save(newEmployee);
            return modelMapper.map(savedEmployee, EmployeeDto.class);
        }
        else {
            throw new NoSuchElementException("Employee with email is already present ");
        }

    }

    public EmployeeDto getEmployeeByEmail(String email) {
        Optional<EmployeeEntity> employee = Optional.ofNullable(employeeRepository.findByEmail(email)
                .orElseThrow(() -> new NoSuchElementException("No employee with email :" + email)));

        return modelMapper.map(employee, EmployeeDto.class);
    }

    public EmployeeDto updateEmployee(EmployeeDto employeeDto,String email) {
        EmployeeEntity employee = employeeRepository.findByEmail(email).orElse(null);

        if(employee == null)
        {
            throw new RuntimeException("No employee with email present");
        }

        modelMapper.map(employeeDto,employee);
        employee.setEmail(email);
        EmployeeEntity updatedEmployee = employeeRepository.save(employee);

        return modelMapper.map(updatedEmployee, EmployeeDto.class);

    }

    public List<EmployeeDto> getAllEmployee() {
        List<EmployeeEntity> employeeEntityList = employeeRepository.findAll();
        return employeeEntityList.stream()
                .map((employeeEntity -> modelMapper.map(employeeEntity, EmployeeDto.class)))
                .toList();
    }

    public void deleteEmployee(Long id) {

        employeeRepository.deleteById(id);
    }
}
