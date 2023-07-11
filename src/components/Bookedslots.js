import React, { useEffect,useContext} from 'react'
import  dataContext from '../context/dataContext';
const Bookedslots = () => {
    useEffect(() =>{
        fetchallbookedslot();
    },[])
    const context = useContext(dataContext);
    const {allbookedslots,fetchallbookedslot} = context;
  return (
    <>
      {
        
        allbookedslots.map((items)=>{
            Name:{
                items.username;
            }
        })
      }
    </>
  )
}

export default Bookedslots
