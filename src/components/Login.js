import React, { useContext } from 'react'
import dataContext from "../context/dataContext";
import './Home.css'
const Login = () => {
    const context = useContext(dataContext);
    const {credentials,setCredentials,loginUser,match,loginAdmin} = context;
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const clickbutoon = () => {
        console.log('clicked button');
        loginUser();
    }
    const clickbutoonforadmin=()=>{
        loginAdmin();
    }
  return (
    <>
      <div>
                <h2 className='container' style={{'margin':'10vh'}}>Login to Vaccination Booking App</h2>
                <form className="centers" onSubmit={loginUser} >
                    <div className="form-outline mb-4 my-3">
                        <input type="email" id="email" name="email" className="form-control" onChange={onChange} value={credentials.email} />
                        <label className="form-label" htmlFor="email">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password" name="password" className="form-control" onChange={onChange} value={credentials.password} />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="form2Example31" onChange={onChange} />
                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            <a href="#!" onChange={onChange}>Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" onClick={clickbutoon} className="button" style={{'marginRight':'20px'}}>Login As User</button>
                    <button type="button" onClick={clickbutoonforadmin} className="button">Login As Admin</button>

                </form>
            </div>
    </>
  )
}

export default Login
