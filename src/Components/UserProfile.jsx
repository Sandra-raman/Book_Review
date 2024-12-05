import React from 'react'

function UserProfile() {
  return (
    <div>
        <div className="row mt-5">
            <div className="col-2">
            <label className='ms-2 '>
              <input type='file' style={{display:'none'}}/>
              <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="profile" height={'140px'} width={'140px'} />
            </label>
            </div>
            <div className="col-5">
                <h4>UserName</h4>
                <hr />
                <h6>Email:</h6>
            </div>
        </div>
    </div>
  )
}

export default UserProfile