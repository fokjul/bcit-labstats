import React from 'react';
import './MeetingMatrixTable.scss';
import TextLink from '../../Navigation/TextLink/TextLink';



const MeetingMatrixTable = ({ meetingMetrics }) => {

  return (
    <>
      <div className='meetingMetrics'>
      <div className='meetingMetrics__header'>
        <div className='meetingMetrics__header-cell'>Dates</div>
        <div className='meetingMetrics__header-cell'>Days</div>
        <div className='meetingMetrics__header-cell'>Time</div>
        <div className='meetingMetrics__header-cell'>Locations</div>
      </div>
      {meetingMetrics?.map((metricItem, index) => (
        <div className='meetingMetrics__row' key={index}>
            <div key={index} className='meetingMetrics__cell'>{metricItem.dates}</div>
            <div key={index} className={`meetingMetrics__cell ${metricItem.days === 'N/A' ? 'disabled' : ''}`}>{metricItem.days}</div>
            <div key={index} className={`meetingMetrics__cell ${metricItem.times === 'N/A' ? 'disabled' : ''}`}>{metricItem.times}</div>
            <div className='meetingMetrics__location-container'>
              <TextLink text={metricItem.locations}/>
              {metricItem.room ? metricItem.room : ''}
            </div>
        </div>
        
      ))}
      </div>
      <div className='meetingMetrics--mobile'>
      {meetingMetrics?.map((metricItem, index) => (
        <div className='meetingMetrics__row' key={index}>
            <div className='meetingMetrics__metric'>
              <div className='meetingMetrics__header-cell'>Dates</div>
              <div key={index} className='`meetingMetrics__cell'>{metricItem.dates}</div>
            </div>
            <div className='meetingMetrics__metric'>
              <div className='meetingMetrics__header-cell'>Days</div>
              <div key={index} className={`meetingMetrics__cell ${metricItem.days === 'N/A' ? 'disabled' : ''}`}>{metricItem.days}</div>
            </div>
            <div className='meetingMetrics__metric'>
              <div className='meetingMetrics__header-cell'>Time</div>
              <div key={index} className={`meetingMetrics__cell ${metricItem.times === 'N/A' ? 'disabled' : ''}`}>{metricItem.times}</div>
            </div>
            <div className='meetingMetrics__metric'>
              <div className='meetingMetrics__header-cell'>Locations</div>
              <div className='meetingMetrics__location-container' key={index}>
              <TextLink text={metricItem.locations}/>
              {metricItem.room ? metricItem.room : ''}
            </div>
            </div>
        </div>
        
      ))}
      </div>
    </>
   
  );
}

export default MeetingMatrixTable