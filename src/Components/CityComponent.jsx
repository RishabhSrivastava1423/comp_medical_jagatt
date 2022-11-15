import React from 'react'
import CityCard from './CityCard'
import delhi from '../assests/city/delhi.svg'
const CityComponent = () => {
  return (
    <React.Fragment>
        <div className="row">
            <CityCard src={delhi} name="Delhi" number="120"/>
            <CityCard src={delhi} name="Delhi" number="120"/>
            <CityCard src={delhi} name="Delhi" number="120"/>
            <CityCard src={delhi} name="Delhi" number="120"/>
            <CityCard src={delhi} name="Delhi" number="120"/>
          </div>
          <div className="row">
          <CityCard src={delhi} name="Delhi" number="120"/>
          <CityCard src={delhi} name="Delhi" number="120"/>
          <CityCard src={delhi} name="Delhi" number="120"/>
          <CityCard src={delhi} name="Delhi" number="120"/>
          <CityCard src={delhi} name="Delhi" number="120"/>
          </div>
          <div className="row">
          <CityCard src={delhi} name="Delhi" number="120"/>
          <CityCard src={delhi} name="Delhi" number="120"/>
          <CityCard src={delhi} name="Delhi" number="120"/>
          <CityCard src={delhi} name="Delhi" number="120"/>
          <CityCard src={delhi} name="Delhi" number="120"/>
          </div>
    </React.Fragment>
    
  )
}

export default CityComponent