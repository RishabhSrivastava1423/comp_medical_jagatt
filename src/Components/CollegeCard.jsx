import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import imgCard from "../assests/college-banner.jpg";
import locImg from "../assests/location_logo.jpg";

function CollegeCard() {
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon((icon) => !icon);
  };
  return (
    <div className="card card-college-mj">
      <img src={imgCard} className="card-banner-img" alt="..." />
      <div class="card_bottom_colg">
        <img class="colg_logo" src={locImg} alt="Card image cap" />
        <div class="colg_cat_icon o-10-r">
          location <br /> Approved by
        </div>
        <div onClick={handleClick}>
          {icon ? (
            <i className=" fa fa-solid fa-heart heart" />
          ) : (
            <i className="fa-regular fa-heart heart" />
          )}
        </div>
      </div>
      <div className="card-body-mj">
        <p class="card-heading b2-16-m">
          <Link to="/">
            All India Institute of Medical Sciences - [AIIMS] - New Delhi
          </Link>
        </p>
        <div class="row">
          <ul class="col-3 colg-fee">
            <li class="high s2-14-m">15,520</li>
            <li class="low o-10-r">MBBS</li>
          </ul>
          <ul class="col-9 colg-enterance-exam">
            <li class="high s2-14-m mb-1">NEET</li>
            <li class="low o-10-r">1ST YEAR EXAM ACCEPTED</li>
          </ul>
          <ul class="col-12 colg_sub_silos">
            <li>
              {" "}
              <Link to="/" class="c12-sm">
                Admission 2022
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" class="c12-sm">
                Courses &amp; fees
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" class="c12-sm">
                Facilities
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" class="c12-sm">
                Result
              </Link>{" "}
            </li>
          </ul>
        </div>
        <button type="button" class="btn-mj btn_primary_large m-1">
          Apply now
        </button>
        <button type="button" class="btn-mj btn_secondary_large">
          Know More
        </button>
      </div>
    </div>
  );
}

export default CollegeCard;

{
  /* <button type="button" className="btn btn-info">Info</button> */
}
