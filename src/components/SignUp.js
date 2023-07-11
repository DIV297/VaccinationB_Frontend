import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import dataContext from "../context/dataContext";
import './Home.css'
const SignUp = () => {
  let history = useNavigate();
const context = useContext(dataContext);
const {AddUser,credentials,setCredentials,match,AddAdmin} = context;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}
const clickbutoon = () => {
    console.log('clicked button');
    AddUser();
    if(match){
      // history("../");
    }
}
const clickbutoonforadmin = ()=>{
  console.log('clicked button');
    AddAdmin();
    if(match){
      // history("../");
    }
}
  return (
    <>
      <h2 className='' style={{'margin':'6vh'}}>Create Account to Vaccination Booking App</h2>

<form onSubmit={AddUser} className="login" style={{
  
}}>
<div className="form-outline mb-4">
<input type="text" name='name' id='name' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="name" >Username</label>
</div>

<div className="form-outline mb-4">
<input type="number" name='age' id='age' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="age" >Age</label>
</div><div className="form-outline mb-4">
<input type="number" name='mobileno' id='mobileno' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="mobileno" >Mobile no</label>
</div><div className="form-outline mb-4">
<input type="text" name='city' id='city' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="city" >city</label>
</div>
<div className="form-outline mb-4">
<input type="text" name='state' id='state' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="state" >State</label>
</div>
<div className="form-outline mb-4">
<input type="email" name='email' id='email' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="email" >Email address</label>
</div>

<div className="form-outline mb-4">
<input type="password" name='password' id='password' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="password" >Password</label>
</div>



<button type="button" className="button"  onClick={clickbutoon} style={{'marginRight':'20px'}}>SignUp</button>
<button type="button" className="button"  onClick={clickbutoonforadmin}>SignUp As Admin</button>

</form>
    </>
  )
}

export default SignUp
