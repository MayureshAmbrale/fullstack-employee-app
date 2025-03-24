import { useState } from "react";

const Update = () => {

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
               const res = await fetch(`http://localhost:8080/employee/update/${mail}`, {
                   method: "GET",
                   headers: {
                       "Content-Type": "application/json",
                   },
                //    body:JSON.stringify(data)
               });
   
               if (!res.ok) {
                   throw new Error("No employee found");
               }
   
               const d = await res.json();
               setData(d);
               console.log(d);
            //    setResponse(res);
            //    setError(""); 
           } catch (err) {
            //    setResponse(null); /
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
       const updateEmployee = (e) => {
        const {name, value} = e.target;

        setEmployee((preEvent) => {
            return { ...preEvent, [name]: value }
        }
        )
    }
   
       return (
           <div className="container">
               <form onSubmit={handleSubmit}>
                   <label htmlFor="getEmail">Enter Email of employee which you wan't to Update</label>
                   <input
                       type="email"
                       placeholder="Enter email"
                       value={mail}
                       onChange={handleInput}
                       name="email"
                   />

                   <p>Enter data to update</p>
                   <label htmlFor="name">Enter Name </label>
                <input type="text" placeholder="Enter Name" id="name" value={data.name} name="name" onChange={updateEmployee} />
                <br />
                <label htmlFor="number">Enter Mobile Number </label>
                <input type="text" placeholder="Enter Mobile Number" id="number" value={data.mobNo} name="mobNo" onChange={updateEmployee} />

                <br />
                <label htmlFor="department">Enter Department </label>
                <input type="text" placeholder="Enter Department" id="department" value={data.department} name="department" onChange={updateEmployee} />
                   <button type="submit">Submit</button>
               </form>
               
   
               
           </div>
       );
}
export default Update;