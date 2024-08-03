import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (

    <div className='homeStyle'>
        <div className='headline'>    
                <h1>welcome to <span style={{color:"green"}}>TechLambdas PVT LtD</span></h1>
                <h5> <Link to='/login' style={{textDecoration:"none", color:'#5c8dce'}}>Nest Page</Link></h5>
        </div>
        


    </div>
  )
}
