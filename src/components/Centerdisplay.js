import React,{useContext} from 'react'
import dataContext from "../context/dataContext";
const Centerdisplay = (props) => {
    const {centers} = props 
    const context = useContext(dataContext)
    const {deletecenter}=context;
  return (
    <>
      <div style={{'display':'inline-block'}}>
            <div className="card" style={{ "width": "30vh",
    "margin": "25px"}}>
                <div className="card-body">
                    <h5 className="card-title">Center:{centers.name}</h5>
                    <p className="card-text">Place:{centers.place}</p>
                    <p className="card-text">Dosage Available:{centers.dosage}</p>
                    <i style={{"cursor":"pointer"}} className="fa-solid fa-trash mx-2" onClick={()=>{deletecenter(centers._id)}}></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Centerdisplay
