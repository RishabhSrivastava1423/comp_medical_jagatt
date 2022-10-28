import React from 'react'

function NavIcons() {
  return (
    <div style={{'outline':'None'}}>
        <button type="button" className="btn btn-outline-info btn-sm m-2">Review</button>
        <button type="button" className="btn btn-outline-info btn-sm m-2">Admission</button>
        <button type="button" className="btn btn-outline-info btn-sm m-2"><i className="fa-brands fa-facebook-f"/></button>
        <button type="button" className="btn btn-outline-info btn-sm m-2"><i className="fa-brands fa-twitter"/></button>
        <button type="button" className="btn btn-outline-info btn-sm m-2"><i className="fa-brands fa-instagram"/></button>
        <button type="button" className="btn btn-outline-info btn-sm m-2"><i className="fa-brands fa-youtube"/></button>
        <button type="button" className="btn btn-outline-info btn-sm m-2"><i className="fa-brands fa-linkedin"/></button>
        
    </div>
  )
}

export default NavIcons