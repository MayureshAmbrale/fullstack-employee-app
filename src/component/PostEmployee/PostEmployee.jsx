import { useState } from "react";
import "./PostEmployee.css";

const PostEmployee = () => {

    const [employee, setEmployee] = useState({
        name: "", email: "", mobNo: "", department: ""
    });

    const updateEmployee = (e) => {
        const {name, value} = e.target;

        setEmployee((preEvent) => {
            return { ...preEvent, [name]: value }
        }
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
            const response = await fetch("http://localhost:8080/employee/post",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(employee)
            });
            const data = response.json();
            console.log(data);
        }
        catch(e)
        {
            console.log(e);
        }


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Name </label>
                <input type="text" placeholder="Enter Name" id="name" value={employee.name} name="name" onChange={updateEmployee} />

                <br />
                <label htmlFor="email">Enter Email </label>
                <input type="email" placeholder="Enter Email" id="email" value={employee.email} name="email" onChange={updateEmployee} />

                <br />
                <label htmlFor="number">Enter Mobile Number </label>
                <input type="text" placeholder="Enter Mobile Number" id="number" value={employee.mobNo} name="mobNo" onChange={updateEmployee} />

                <br />
                <label htmlFor="department">Enter Department </label>
                <input type="text" placeholder="Enter Department" id="department" value={employee.department} name="department" onChange={updateEmployee} />
                <div className="button-container">
                    <button type="submit" className="btn">Submit</button>
                    <button type="reset" className="btn">Reset</button>
                </div>
                <br />

            </form>
        </>
    )
}
export default PostEmployee;