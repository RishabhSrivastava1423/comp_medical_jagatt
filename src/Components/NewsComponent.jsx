import React from 'react'
import NewsCardBig from './NewsCardBig'
import NewsCardSmall from './NewsCardSmall'

const NewsComponent = () => {
  return (
    <React.Fragment>
        <div className="row">
            <NewsCardSmall/>
            <NewsCardSmall/>
            <NewsCardSmall/>
            <NewsCardSmall/>
            <NewsCardBig/>
            <NewsCardBig/>
            <NewsCardBig/>
        </div>
    </React.Fragment>
  )
}

export default NewsComponent