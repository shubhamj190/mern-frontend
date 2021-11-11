import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

function Login(props) {

const [credentials, setCredentials] = useState({email:"",password:""})
let history = useHistory();
    const handelClick= async (event)=>{
        event.preventDefault();
            //:API call
            const response = await fetch('http://127.0.0.1:5000/api/auth/login/', {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({email:credentials.email, password:credentials.password}),
            });
        
            const json= await response.json()
            console.log(json)
            if(json.success===true){
                // save the auth token and redirect
                localStorage.setItem('token',json.authtoken)
                history.push("/")
                props.showAlert(" loggedin successfully",'success')
            }
            else{
                props.showAlert(" invalid credetails please try again",'danger')
            }
    }

    const onchange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }

    return (
        <div className="container">
           <div className="container">
           <form onSubmit={handelClick} >
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" onChange={onchange} id="email" name="email" value={credentials.email} aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onchange} value={credentials.password} id="password" name="password"/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
           </div>
        </div>
    )
}

export default Login
