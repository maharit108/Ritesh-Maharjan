import React from 'react'

function TimelineItem({ data }) {
    return (
        <div className='timelineitem'>
            <div className='timelineitem__content'>
                <span className='timelineitem__title'>
                    {data.title}
                </span>
                <p>{data.info}</p>
                {data.image && (<img src='data.image' alt='image' />)}
            </div>
            <span className='circle'></span>
        </div>
    )
}

export default TimelineItem
