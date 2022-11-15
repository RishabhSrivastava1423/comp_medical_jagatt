import React from 'react'
import { Link } from 'react-router-dom'
import cardImg from '../assests/newsCardSmall.webp';

const NewsCardSmall = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                    <div className="card card-news-mj">
                        <img className="card-banner-img" src={cardImg} alt="CardName" />
                        <div className="card-body-mj">
                            <div className="news_cat_icon o-10-r">Category Name</div>
                            <div className="news_crd_date o-10-r">
                                <i className="fa fa-calendar"></i>
                                <span>10 AUG, 22</span>
                            </div>
                            <p className="card-heading b2-16-m"><Link to="/" >Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Iusto voluptatum in itaque culpa maiores sequi omnis tempora quod,
                                    beatae perferendis recusandae aperiam voluptatem consequatur velit sit laboriosam
                                    sint dolore. Aspernatur.
                                </Link></p>
                            <p className="card-para s2-14-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veritatis suscipit numquam laudantium incidunt porro alias tenetur voluptatum sunt similique, soluta ipsum, possimus dolores aperiam amet, eos iure in nihil recusandae
                                praesentium ipsam maxime laboriosam quisquam distinctio. Temporibus, suscipit ab molestiae est praesentium repellendus, quae id vel nobis necessitatibus possimus vitae at sapiente ex aperiam quas dignissimos aspernatur
                                qui? Odio?</p>
                            <div className="o-10-r news_cat_icon">
                                <i className="fa fa-comments"></i>
                                <span>25</span>
                                <i className="fa fa-eye"></i>
                                <span>240</span>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default NewsCardSmall