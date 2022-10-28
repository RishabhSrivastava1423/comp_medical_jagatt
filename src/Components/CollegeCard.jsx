import React from 'react'
import { useState } from 'react';
import imgCard from '../assests/college-banner.jpg'
import locImg from '../assests/location_logo.jpg'

function CollegeCard() {
    const [icon,setIcon] = useState(false);
    const handleClick =()=>{
        setIcon(icon => !icon);
      }
  return (
    <div className="card h-100">
      <img src={imgCard} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className='card-img-overlay mt-auto' >
            <div className="row" style={{'color':'white'}}>
                <div className="col-md-2"><img src={locImg} alt="..." /></div>
                <div className="col-md-8" style={{'fontSize':'12px', 'fontWeight':'bold',}}>  <p>Location <br/> Approved by</p></div>
                <div className="col-md-2" onClick={handleClick} >{icon ? <i class="fa-solid fa-heart"/> : <i class="fa-regular fa-heart"/> }</div>
            </div>
        </div>
        <h5 className="card-title">All India Institute of Medical Sciences - [AIIMS] - New Delhi</h5>
        <div className="row" style={{'fontSize':'13px', 'fontWeight':'bold'}}>
            <div className="col-md-4"> <p>15,520</p> </div>
            <div className="col-md-8"> <p>NEET</p></div>
        </div>
        <div className="row" style={{'fontSize':'13px', 'fontWeight':'bold'}}>
            <div className="col-md-4"> <p> MBBS</p> </div>
            <div className="col-md-8" > <p>FIRST YEAR EXAM ACCEPTED </p> </div>
        </div>
        <div className="row" style={{'fontSize':'10px', 'fontWeight':'bold'}}>
            <div className="col-md-3"> <p>ADDMISSION 2022 </p> </div>
            <div className="col-md-3" > <p>COURSE & FEES</p> </div>
            <div className="col-md-3" > <p>  FACILITIES</p></div>
            <div className="col-md-3" > <p>RESULT</p> </div>
        </div>
        <div className="row" style={{'fontSize':'13px'}}>
            <div className="col-md-6"> <button type="button" class="btn btn-info btn-lg" style={{'width':'100%'}}>Apply Now</button></div>
            <div className="col-md-6"> <button type="button" class="btn btn-info btn-lg" style={{'width':'100%'}}>Know More</button></div>
        </div>
      </div>
    </div>
  )
}

export default CollegeCard

{/* <button type="button" class="btn btn-info">Info</button> */}
