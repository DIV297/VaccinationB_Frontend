import React, { useEffect, useState } from 'react';
import dataContext from "./dataContext";
import Alert from '../components/Alert';
import { useNavigate } from 'react-router-dom';
const VaccinationData = (props) => {
  //console.log(props.location.state)
  
  let history =useNavigate();
    const [centers,setCenters] = useState([]);
    const [profilee,setProfilee] = useState([])
    const [bookedslots,setBookedslots] = useState([]);
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [match,setMatch] = useState(false);
    const [admin,setAdmin] = useState(false);
    const [userlogin,setUserlogin] = useState(false);
    const [allbookedslots,setAllbookedslots] = useState([]);
    const link = "https://vaccinationbac-backend.onrender.com";
    const fetchallcenters = async()=>{
      try{
        
        const response = await fetch(`${link}/auth/user/displaycenter`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
          
          });
          
          const json = await response.json();
          console.log(json)
          setCenters(json);
        }
        catch(err){

        }
    }

    const fetchbookedslot = async()=>{
      try{
        const response = await fetch(`${link}/auth/user/displaybookedslot`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
          
          });
          
          const json = await response.json();
          console.log(json)
          setBookedslots(json);
          fetchallcenters();
        }
        catch(err){

        }
    }
    const deletebookedslots = async(id)=>{
      const response = await fetch(`${link}/auth/user/deletebookedslots/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      showAlert("success",'Center Deleted Successfully','block')
      fetchbookedslot();
    }
    const addcenter = async (name, place,dosage) => {
      try{
        const response = await fetch(`${link}/auth/admin/addcenter`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({ name, place,dosage })
        });
        const json = await response.json();
        setCenters(centers.concat(json))
        showAlert("success",'Note Added Successfully','block')
        fetchallcenters();
      }
      catch(err){

      }
      }
      const deletecenter = async (id) => {
        try{
        const response = await fetch(`${link}/auth/admin/deletecenter/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'auth-token': localStorage.getItem('token')
          }
        });
        const json = await response.json();
        setCenters(centers.concat(json))
        showAlert("success",'Center Deleted Successfully','block')
        fetchallcenters();
      }
      catch(err){

      }
      }
      const [slots,setSlots] = useState([]);
      const applyforslot = async (id,value) => {
        try{
        const response = await fetch(`${link}/auth/user/applyforslot/${id}/${value}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });   
        const json = await response.json();
        console.log(json);
        if(json.success){
         setSlots(slots.concat(json));
        showAlert("success",'Slots added','block')
        fetchbookedslot();
        fetchallcenters();
        }
        else{
          showAlert("danger",'Only one slot per user can be added','block')
        } 
      }
      catch(err){
      }
      }
      const fetchallbookedslot = async()=>{
        try {
          const response = await fetch(`${link}/auth/admin/displayallbookedslot`,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
          }
          }
          
        )
        const json = await response.json()
        setAllbookedslots(json);
      } catch (error) {
          
        }
      }
      const deleteaccount = async () => {
        try{
        const response = await fetch(`${link}/auth/user/deleteaccount`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'auth-token': localStorage.getItem('token')
          }
        });
        showAlert("success",'Account Deleted Successfully','block');
        history("../", { replace: true });
      }
      catch(err){

      }
      }


      const loginUser = async () => {
        // login(user.email,user.password);
        try{
        const response = await fetch(`${link}/auth/user/loginuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.token);
            setMatch(json.success);
            setAdmin(false);
            setUserlogin(true);
            // showAlert("success", "successfully login")
            showAlert("success", "successfully login", "block")
            history("../home");
        }
        else if(json.success===false) {
            showAlert("danger", "Invalid credentials", "block")
           
        }
        else{
          showAlert("danger","Network Error.Please check connection","block");
        }
      }
      catch(err){
        showAlert("danger","Network Error.Please check connection","block");
      }
    } 
    
    const AddUser = async () => {
      // login(user.email,user.password);
      try{
      const {name,age,mobileno,city,state,email,password}=credentials;
      const response = await fetch(`${link}/auth/user/adduser`, {
        
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({name,age,mobileno,city,state,email,password })
  
      });
      const json = await response.json();
          console.log(json)
          if (json.answer===0) {
              localStorage.setItem('token', json.authtoken);
              showAlert("success", "successfully account created",'block')
              history("../", { replace: true });
              if(json.success===true)
              setMatch(json.success);
              setAdmin(false);
              showAlert("success", "successfully account created. You can now login",'block')
          }
          else if(json.answer===2) {
              showAlert("danger", "User already exist.Try to login", "block")
          }
          else if(json.answer===3) {
            showAlert("danger", "User with this mobile no already exist", "block")
        }
          else if(json.answer===1) {
            showAlert("danger", "Invalid Crudentials - Fill details correctly.Your detalis should have atleast 3 characters", "block")
          }
          else{
            showAlert("danger","Network Error.Please check connection","block");
          }
      }
      catch(err){
        showAlert("danger","Network Error.Please check connection","block");
      }
      }
      const profile = async()=>{
        try{
          const response = await fetch(`${link}/auth/user/getuser`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
              },
            
            });
            
            const json = await response.json();
            console.log(json)
            setProfilee(json);
          }
          catch(err){
  
          }
      }
  
      const loginAdmin = async () => {
        // login(user.email,user.password);
        try{
        const response = await fetch(`${link}/auth/admin/loginadmin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.token);
            if(json.success===true)
            setMatch(json.success);
            setAdmin(true);
            setUserlogin(true);
            // showAlert("success", "successfully login")
            showAlert("success", "successfully login", "block");
            history("../addcenter");
        }
        else {
            showAlert("danger", "Invalid credentials", "block")
            // alert('Invalid Credentials')
        }
      }
      catch(err){
        showAlert("danger","Network Error.Please check connection","block");
      }
    }
    const AddAdmin = async () => {
      // login(user.email,user.password);
      try{
      const {name,email,password}=credentials;
      const response = await fetch(`${link}/auth/admin/addadmin`, {
        
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({name,email,password })
        
      });
      const json = await response.json();
          console.log(json)
          if (json.answer===0) {
              localStorage.setItem('token', json.authtoken);
              showAlert("success", "successfully account created",'block')
              history("../", { replace: true });
              if(json.success===true)
              setMatch(json.success);
              setAdmin(true);
              showAlert("success", "successfully account created. You can now login",'block')
          }
          else if(json.answer===2) {
              showAlert("danger", "User already exist.Try to login", "block")
          }
          else if(json.answer===1) {
            showAlert("danger", "Invalid Crudentials - Your details should contain atleast 3 alphabets", "block")
        }
        else{
          showAlert("danger","Network Error.Please check connection","block");
        }
      }
      catch(error){
        showAlert("danger","Network Error.Please check connection","block");
      }
      }
    const [message, setMessage] = useState('');
    const [type, setType] = useState(' ');
    const [display,setDisplay]=useState('none');
  
    const showAlert = (type, message,display) => {

      setMessage(message);
      setType(type)
      setDisplay(display)
      setTimeout(() => {
        setMessage(' ')
      setType(' ')
      setDisplay('none')
      },[2000])
      
    }
  return (
    <>
    <Alert message={message} type={type} display={display}/>
      <dataContext.Provider value={{centers,setCenters,fetchallcenters,addcenter,deletecenter,credentials,setCredentials,loginUser,match,AddUser,admin,setAdmin,AddAdmin,loginAdmin,applyforslot,fetchbookedslot,bookedslots,deletebookedslots,profilee,profile,userlogin,setUserlogin,deleteaccount,allbookedslots,fetchallbookedslot}}>
        {props.children}
      </dataContext.Provider>
    </>
  )
}

export default VaccinationData
