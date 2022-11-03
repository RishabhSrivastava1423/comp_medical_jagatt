import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgCard from '../assests/article-feature-image.jpg';

function ArticleCard() {
    const [icon,setIcon] = useState(false);
    const handleClick =()=>{
        setIcon(icon => !icon);
      }
  return (
    <div className="card card-blog-mj">
      <img src={imgCard} className="card-banner-img" alt="..." />
      <div className="blog_cat_icon o-10-r"><p>Category Name <br/> September 14, 2022</p></div>
      <div  onClick={handleClick} >{icon ? <i className="fa fa-solid fa-heart heart"/> : <i className="fa-regular fa-heart heart"/> }</div>
      <div className="card-body-mj">
              <p className="card-heading b2-16-m"><Link to="/">Some quick example text to build on the card title and make up
                  the
                  bulk of the card's
                  content...</Link></p>
              <p className="card-para s2-14-r">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque repellat quae
                facere ipsam officiis corporis, unde quos excepturi saepe magni...</p>
            </div>
    </div>
  )
}

export default ArticleCard