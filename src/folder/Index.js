import React, { useState }  from 'react';
import './Index.scss'
import { userNameValidator,passwordValidator } from '../components/regexValidator';
import { Link } from 'react-router-dom';

export const Index = () => {
    const [input ,setInput] =useState({userName:'', password:''})

    const [error ,seterror]=useState("")

    const [succes,setSucces]=useState('')

    const handleChange =(e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const formSumbit =(e)=>{
        e.preventDefault()
        setSucces('')
    // if(!userNameValidator(input.userName))
    //     return seterror("please enter your username")
    if(!passwordValidator(input.password))
        return seterror("password should have minimum 8 character with the comination of uppercase ,lowercase, numbers and specialcharacters")
        setSucces('Successfully Validated')
    }
    return (
        <div>
            <div className='container'>
                <div className='content'>
                <h1>welcome back! </h1>
                <div className='signStyle'>
                    <h2>sign in to </h2>
                   <p>lorem lpusm is simply</p>
                  
                    </div>
                  
                    <div className='signPage'>
                    <div className='formStyle'>

                    {succes.length > 0 && <div style={ {marginBottom:"10px",color:"green"}}>{succes}</div>}

                        <label for="username">User name:</label><br></br>
                        <input type="text" id="username" name="username" placeholder='Enter your user name' onChange={handleChange} />
                   
                    </div>



                    <div className='formStyle'>

                        <label for="pass">Password </label><br></br>
                        <input type="password" id="pass" name="password" minlength="8" required placeholder='Enter your password' onChange={handleChange}  />
                       
                        {error.length > 0 && <div style={ {marginBottom:"10px",color:"red"}}>{error}</div>}
                    </div>
                    <div className='sumBotton' onClick={formSumbit}>
                  <Link to ="/EmpView">  <input type="submit" value="Login" /></Link>
                    </div>
                    
                    </div>

                </div>
            </div>
        </div>
    )
}

