import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
        <div>
      <div className="row">
        <div className="col-6 p-5">
          <img className='rounded shadow' height={'400px'} src="https://images-cdn.reedsy.com/discovery/post/109/featured_image/medium_aa7b8fcc4ee3a86626aca3157bbd8d697c38429a.jpg" alt="" />
        </div>
        <div className="col-6 p-5">
          <h3 className='my-4 text-center'>Welcome to PlotPoint</h3>
          <h4 className='mb-3 ms-2'>Sign{
            register?"Up":"In"}</h4>
            {
              register && <input type="text" placeholder='Username' className='form-control mb-3'/>
              

            }
          <input type="email" placeholder='Email' className='form-control mb-3'/>
          <input type="password" placeholder='Password' className='form-control mb-3'/>
         {
          register?
          <div className='text-center'>
          <button className='btn btn-info mb-3'>SignUp</button>
          <p>Already Register? <Link to={'/login'}>Login Now</Link></p>
        </div>
        :
        <div className='text-center'>
        <button className='btn btn-info mb-3'>SignIn</button>
        <p>New here? <Link to={'/register'}>Register Now</Link></p>
      </div>
         }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Auth