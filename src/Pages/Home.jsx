import React from 'react'
import ReviewBlock from '../Components/ReviewBlock'

function Home() {
  return (
    <div>
      <h2 className='text-center mt-4'>~Top Picks~</h2>
      <div className="row">
        <ReviewBlock/>
      </div>
      <div className="row">
        <ReviewBlock/>
      </div>
    </div>
  )
}

export default Home