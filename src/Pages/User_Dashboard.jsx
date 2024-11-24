import React from 'react'
import AddReview from '../Components/AddReview'
import ViewReview from '../Components/ViewReview'
import UserProfile from '../Components/UserProfile'

function User_Dashboard() {
  return (
    <div>
     <div className="row">
      <UserProfile/>
     </div>
     <div className="row">
      <AddReview/>
     </div>
     <div className="row">
      <ViewReview/>
     </div>
    </div>
  )
}

export default User_Dashboard