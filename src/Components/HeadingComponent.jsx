import React from 'react'

function HeadingComponent(props) {
  return (
    <React.Fragment>
        <h4 className='text-center'>Our {props.title} card Component here</h4>
        <p className='text-center s2-14-r '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum explicabo, ex, sunt modi magnam quasi, a voluptas ullam excepturi totam! Adipisci, eius explicabo. Facilis totam cum repellat nulla esse? </p>
    </React.Fragment>
  )
}

export default HeadingComponent