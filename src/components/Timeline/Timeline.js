import React from 'react'
import TimelineItem from '../TimelineItem/TimelineItem.js'
import projectData from '../projectData/projectData.js'

import './Timeline.css'

function Timeline() {
    return (
        <div className='timeline'>
            <div className='timeline__wrapper'>
            {projectData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
        </div>
    )
}

export default Timeline
