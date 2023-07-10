import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import noteContext from '../context/dataContext';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import "./Home.css"

const Home = () => {
  const [value, setValue] = useState(new Date());
  const context = useContext(noteContext);
  const { centers, setCenters, fetchallcenters, applyforslot, fetchbookedslot, bookedslots, deletebookedslots } = context;
  useEffect(() => {
    fetchallcenters();
    fetchbookedslot();
  }, [])
  const Submitslot = () => {
    applyforslot(idd, value);
    console.log(value)
    setDisplayWithstate('none');
    setDisplayofcontent('block')
  }
  const [displayWithstate, setDisplayWithstate] = useState('none');
  const [Displayofcontent,setDisplayofcontent] = useState('block');
  const [idd, setIdd] = useState('');



  return (
    <>

      <div className="calender container" style={{ display: displayWithstate }}>
        <h1>Choose date</h1>
        <marquee className = "marq" behavior="alternate" direction="">
                <p><strong>*Note:-</strong>The date is availabe till next month</p></marquee>
        <DatePicker selected={value} onChange={(value) => setValue(value)} minDate={new Date()} maxDate={new Date((new Date()).setMonth((new Date()).getMonth() + 1))} />
        <br/>
        <button className='button m' onClick={Submitslot}>Submit</button>

        <button className="button m" onClick={() => {
          setDisplayWithstate('none');
          setDisplayofcontent('block');
        }
        }>Close</button>
      </div>
      <div style={{display:Displayofcontent}}>
      <h1 className='container datavalue'>Slot Booked</h1>
      {
        bookedslots.length == 0 ? <div>
          <h4 className='container'>No slot Booked till now.</h4>
        </div> :
          bookedslots.map((bs) => {
            return <>
              <div className= 'card-body bookedslots' key={bs._id}>
                <h3 className="card-title">Center Name: {bs.name}</h3>
                <h2 className="card-text">Center Place:{bs.place}</h2>
                <h2 className="card-text">Slot date:{bs.slotdate}</h2>
                <button className='button' style={{ "cursor": "pointer" }} onClick={() => { deletebookedslots(bs._id) }}>Delete</button>
              </div>
              <br></br>
            </>
          })
      }

      <br></br>
      <h1 className='container datavalue'>Vaccination Centers</h1>
      <div className='allcenters'>
      {
      
        centers.map((center) => {
          return <>
            <div className="card-body centers" key={center._id}>
              <h3 className="card-title">Center Name: {center.name}</h3>
              <h2 className="card-text">Center Place:{center.place}</h2>
              <h2 className="card-text">Dosage Availabe:{center.dosage}</h2>
              <button className="button" style={{ "cursor": "pointer" }} onClick={() => {
                setIdd(center._id);
                setDisplayWithstate('block');
                setDisplayofcontent('none');
              }}>Apply for slot</button>
            </div>
            <br></br>
          </>
        })
      }</div></div>
    </>
  )
}

export default Home

