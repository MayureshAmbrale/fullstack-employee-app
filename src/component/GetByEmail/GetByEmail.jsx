import { useState } from "react";
import "./GetByEmail.css";

const GetByEmail = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        mobNo: "",
        department: "",
    });
    const [response, setResponse] = useState(null);
    const [mail, setMail] = useState("");
    const [error, setError] = useState("");

    const getEmployeeByEmail = async (mail) => {
        try {
            const res = await fetch(`http://localhost:8080/employee/get/${mail}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                throw new Error("No employee found");
            }

            const d = await res.json();
            setData(d);
            setResponse(res);
            setError(""); 
        } catch (err) {
            setResponse(null); 
            setError("No employee found with this email."); 
            setData({ name: "", email: "", mobNo: "", department: "" }); 
        }
    };

    const handleInput = (event) => {
        setMail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getEmployeeByEmail(mail);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="getEmail">Enter Email of employee to get employee</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={mail}
                    onChange={handleInput}
                    name="email"
                />
                <button type="submit">Submit</button>
            </form>

            <div className="employee-data">
                <h2>Employee data</h2>
                <hr />
                {response === null ? (
                    <div>
                        {error ? (
                            <p style={{ color: "red" }}>{error}</p> 
                        ) : (
                            <p>Enter an email to search for an employee.</p> 
                        )}
                    </div>
                ) : (
                    <div>
                        <p><b>Name:</b> {data.name}</p>
                        <p><b>Email:</b> {data.email}</p>
                        <p><b>Mobile No:</b> {data.mobNo}</p>
                        <p><b>Department:</b> {data.department}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetByEmail;