import React from 'react'
import TimelineItem from '../TimelineItem/TimelineItem.js'

function Timeline() {
    return (
        <div className='timeline__wrapper'>
            <TimelineItem data={data} />
        </div>
    )
}

export default Timeline
