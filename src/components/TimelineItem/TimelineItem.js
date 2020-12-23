import React from 'react'

import './TimelineItem.css'
function TimelineItem({ data }) {
    console.log(data)
    return (
        <div className='timelineitem'>
            <div className='timelineitem__content'>
                <span className='timelineitem__steps'>{data.step}</span>
                <span className='timelineitem__title'>
                    {data.title}
                </span>
                <p>{data.info}</p>
                {data.image && (<img src={data.image} alt='' />)}
            </div>
            <span className='timelineitem__circle'>o</span>
        </div>
    )
}

export default TimelineItem
