import React from 'react'
import music from './assets/icon-music.svg'

function Plan() {
  return (
    <div className='plan'>
        <div>
        <img className='music' src= {music} alt="" />
        </div>
        
        <div className='inner-plan'>
        <h5 className='text-plan'>Annual Plan</h5>
        <small className='money'>$59.99/year</small>
        </div>
        
        <div>
        <button className='btn-2'>change
        </button>
        </div>
        
    </div>
  )
}

export default Plan