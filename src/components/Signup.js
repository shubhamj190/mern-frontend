import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

function Signup() {

    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
let history = useHistory();
    const handelClick= async (event)=>{
        const {name, email, password}=credentials
        event.preventDefault();
            //:API call
            const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/createuser/`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({name, email, password}),
            });
        
            const json= await response.json()
            console.log(json)
            history.push('/')
    }

    const onchange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }


    return (
        <div className="container">
        <div className="container-fluid col-md-6 col-sm-12 ">
            <h1 className="text-center display-4">Registration form</h1>
        <form onSubmit={handelClick} >
         <div className="mb-3">
             <label htmlFor="name" className="form-label">Name</label>
             <input type="text" className="form-control" onChange={onchange} id="name" name="name" value={credentials.name} aria-describedby="emailHelp"/>
         </div>
         <div className="mb-3">
             <label htmlFor="email" className="form-label">Email</label>
             <input type="email" className="form-control" onChange={onchange} id="email" name="email" value={credentials.email} aria-describedby="emailHelp"/>
             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
         <div className="mb-3">
             <label htmlFor="password" className="form-label">Password</label>
             <input type="password" className="form-control" onChange={onchange} value={credentials.password} id="password" name="password"/>
         </div>
         <div className="mb-3">
             <label htmlFor="cpassword" className="form-label">Confirm Password</label>
             <input type="password" className="form-control" onChange={onchange} value={credentials.cpassword} id="cpassword" name="cpassword"/>
         </div>
         <button type="submit" className="btn btn-light" disabled={credentials.password!==credentials.cpassword} ><b>Submit</b></button>
     </form>
        </div>
     </div>
    )
}

export default Signup
