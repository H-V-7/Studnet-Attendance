import {useState } from "react"

let studentData = [];
export default function AttendanceForm(){
    console.log(studentData)

    
    const [studentCounter,setStudentCounter] = useState(0);
    const [formData,setFormData] = useState({
        rollNumber:"",
        studenName:"",
        checkInTime:"",
        checkOutTime:"",

    })

    const handleChange = (event) => {
        setFormData((prevData) => {
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }

    

    
        const handleSubmit = (event) => {
            event.preventDefault();
            if(formData){
                studentData.push(formData)
                setStudentCounter(studentData.length)
            }
        }
 
        
        
      

    return(
        
        <>
            <h1 className="font-mono text-5xl mt-10 divide-y-reverse">Student Attendance</h1>
            <hr />
            <form className="flex flex-col border-2  p-4 space-y-8 w-1/2 m-auto mt-10" onSubmit={handleSubmit}>
                <label for="roll-number">Roll Number</label>
                <input className="border-2 border-black-600 rounded-md shadow-sm" type="number" min={1} max={100} name="rollNumber" id="roll-number" onChange={handleChange} required/>
                <label for="student-name" >Student Name</label>
                <input className="border-2 border-black-600 rounded-md shadow-sm" type="text"  id="student-name"  name="studentName" onChange={handleChange} required/>
                <div className="space-x-8">
                <label for="check-in-time">Check In</label>
                <input className="border-2 border-black-600 rounded-md w-20 shadow-sm"  type="time" name="chekInTime" onChange={handleChange} required/>
                <label for="check-out-time">Check Out</label>
                <input className="border-2 border-black-600 w-20 rounded-md shadow-sm" type="time" name="checkOutTime" onChange={handleChange}  required/>
                </div>
                <input className="border-2 mt-8border-black-600 rounded-md shadow-sm" type="submit" value="Submit" />
            </form>
            <p className="mt-10 text-align-center m-auto text-center w-full">Number of Students Present : <strong>{studentCounter}</strong></p>
        </>
    )
}