import React from 'react'
import './RegForm.scss'

export const RegForm = () => {
  return (
    <div className='formStyle'>
        
        <form className='form'>
        <h1>add new employee</h1>
            <div className='box'>
        <label>employee name </label>
        <input type='text' name='name'id='name' placeholder='Enter your name'></input>
        <div className='error' id='nameErr'></div>
        </div>

        <div className='box'>
        <label>Mobile Number </label>
        <input type='number' name='mobile'id='mobile' maxLength="10" placeholder='Enter your phone Number'></input>
        <div className='error' id='mobileErr'></div>
        </div>

        <div className='box'>
        <label>location </label>
        <input type='text' name='location'id='location' placeholder='Enter your location'></input>
        <div className='error' id='locationErr'></div>
        </div>

        <h2>
                qualification
            </h2>
        <div className='formStyle2'>
        <div className='eduStyle'>
              <input type='text' name='sck' placeholder='school / degree'/>
              <div className='mini'>
              <input className='mini' type='number' name='marks' placeholder='%'/>
              </div>
              </div>
            </div>

               
        <div className='formStyle2'>
          <div className='eduStyle'>
          <input type='text' name='sck' placeholder='school / degree'/>
          <div className='mini'>
          <input className='mini' type='number' name='marks' placeholder='%'/>
          </div>
          </div>
        
        </div>

        <div className='box'>
           <input type='submit' value="submit"/> 
        </div>




        </form>
    </div>
  )
}
