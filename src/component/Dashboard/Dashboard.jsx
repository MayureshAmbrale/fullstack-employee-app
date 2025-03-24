import { useEffect, useState } from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";


const Dashboard = () => {

    const [employee, setEmployee] = useState([]);

    const deleteEmployee = async (id)=>
    {
        const response = await fetch(`http://localhost:8080/employee/delete/${id}`,{
            method:"DELETE"
        });
        if(response.ok)
            {
                setEmployee((pre)=>
                    pre.filter((employee)=> employee.id != id )
                );
            }
    }

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch("http://localhost:8080/employee/getAll",{
                    method:"GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                setEmployee(data);
            }
            catch (error) {
                console.error("error occured ", error.message);
            }
        }
        fetchEmployee();
    }, []);

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">Employees</h1>
                        <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Department</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee.map((emp)=>
                                (
                                    <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.phone}</td>
                                        <td>{emp.department}</td>
                                        <td>
                                            <Button variant="outline-secondary">Update</Button>
                                            <Button variant="outline-danger" 
                                            onClick={()=>deleteEmployee(emp.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Dashboard;