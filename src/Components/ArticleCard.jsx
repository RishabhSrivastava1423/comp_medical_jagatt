import React from 'react'
import { useState } from 'react';
import imgCard from '../assests/article-feature-image.jpg';

function ArticleCard() {
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
                <div className="col-md-10" style={{'fontSize':'12px'}}><p>Category Name <br/> September 14, 2022</p></div>
                <div className="col-md-2" onClick={handleClick} >{icon ? <i class="fa-solid fa-heart"/> : <i class="fa-regular fa-heart"/> }</div>
            </div>
        </div>
        <h5 className="card-title">Some quick example text to build on the card title and make up the bulk of the card's content...</h5>
        <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dignissimos quam, quod, ....</p>
      </div>
    </div>
  )
}

export default ArticleCard