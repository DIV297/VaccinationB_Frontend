import React, { useContext, useEffect } from 'react'
import dataContext from '../context/dataContext'
import './Profile.css'
const Profile = () => {
    useEffect(() => {
        profile();
    }, []);
    let context = useContext(dataContext)
    const { profilee, profile,deleteaccount,setUserlogin,setAdmin} = context;
    return (
    <>
            <div className="container col-lg-8">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{profilee.name}</p>
                            </div>
                        </div>
                        <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{profilee.email}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Phone</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{profilee.mobileno}</p>
                                </div>
                            </div>
                            <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">City</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{profilee.city}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">State</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{profilee.state}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <button style={{'width':'100%','marginBottom':'10px'}}className='button' onClick={()=>{ 
                        deleteaccount();
                        setAdmin(false);
                        setUserlogin(false);
                    }}>Delete Account</button>
                    </div>
                </>
                )
}

                export default Profile
