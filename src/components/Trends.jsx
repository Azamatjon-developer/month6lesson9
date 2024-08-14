import React from 'react'
import { DotsIcon } from '../assets/images/icons'

function Trends() {
  return (
    <div className='flex justify-between items-center m-[20px]'>
      <div>
        <h2 className="text-[#393B41]">Trending in Germany</h2>
        <h3 className='text-[20px] font-semibold'>Revolution</h3>
        <p className="text-[#393B41]">50.4K Tweets</p>
      </div>
      <div>
        <DotsIcon/>
      </div>
    </div>
  )
}

export default Trends
