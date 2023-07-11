import React,{useContext,useState,useEffect} from 'react'
import dataContext from "../context/dataContext"
import Centerdisplay from './Centerdisplay'
import './Home.css'
const AddCenter = () => {
    const context=useContext(dataContext)
    const {fetchallcenters,centers,addcenter}= context;
    const [center,setCenter] = useState({name:"",place:"",dosage:0});
    const onhandle=(e)=>{
        e.preventDefault();
        addcenter(center.name, center.place,center.dosage)
        setCenter({name:'',place:'',dosage:0});
    }
    const onChange=(e)=>{
        setCenter({...center,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        console.log("hello");
        fetchallcenters();
    },[])

    
  return (
    <>
     <h1 className='container'>Add Center</h1>
     <div className="login"   >
            <form>
                <div className="form-outline mb-4">
                    <input type="text" id="name" name="name" className="form-control" onChange={onChange} value={center.name}/>
                    <label className="form-label" htmlFor="form2Example1">Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="place" name="place" className="form-control" onChange={onChange} value={center.place}/>
                    <label className="form-label" htmlFor="form2Example2">Place</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="number" id="dosage" name="dosage" className="form-control" onChange={onChange} value={center.dosage}/>
                    <label className="form-label" htmlFor="form2Example2">Dosage Availabe</label>
                </div>

                
                <button type="button" className="button" onClick={onhandle} disabled={center.name.length===0 || center.place.length<5}>Add</button>

            </form ></div>
            {
                centers.map((center)=>{
                    return <Centerdisplay key={center._id} centers={center}></Centerdisplay>
                })
            }
    </>
    
  )
}

export default AddCenter
