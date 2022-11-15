import React from 'react'
import { Link } from 'react-router-dom'
import cardImg from '../assests/NewsCardBig.webp';

const NewsCardBig = () => {
  return (
    <div class="col-lg-4 col-md-4 col-sm-6 col-12 p-2">
                    <div class="news_small_card card-news-mj">
                        <div class="news_banner">
                            <img src={cardImg} alt="CardName" />
                        </div>
                        <div class="card-body-mj">
                            <div class="news_cat_icon o-10-r">Category Name</div>
                            <div class="news_crd_date o-10-r">
                                <i class="fa fa-calendar"></i>
                                <span>10 AUG, 22</span>
                            </div>
                            <p class="card-heading s2-14-m">
                                <Link to="#">Lorem ipsum dolor sit, amet amet amet consectetur..
                                </Link>
                            </p>
                            <div class="news_cat_icon o-10-r">
                                <i class="fa fa-comments" aria-hidden="true"></i>
                                <span>25</span>
                                <i class="fa fa-eye" aria-hidden="true"></i>
                                <span>240</span>
                            </div>
                        </div>
                    </div>
                </div>
  )
}


export default NewsCardBig