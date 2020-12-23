import React from 'react'

import './TimelineItem.css'
function TimeLineItem({ data }) {
    console.log(data)
    return (
        <div className='timeLineItem'>
            <div className='timeLineItem__content'>
                <span className='timeLineItem__circle'></span>
                <span className='timeLineItem__steps'>{data.step}</span>
                <span className='timeLineItem__title'>
                    {data.title}
                </span>
                <p>{data.info}</p>
                {data.image && (<img src={data.image} alt='' />)}
            </div>
        </div>
    )
}

export default TimeLineItem
