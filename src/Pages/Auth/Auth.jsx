import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import './Auth.css'
import icon from './logoos.png'
import AboutAuth from './AboutAuth'
import {signup,login} from '../../actions/auth'  
const Auth = () => {

const [isSignup, setIsSignup] = useState(false)
const [name,setName] =useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch = useDispatch()
const navigate=useNavigate()
const handleSwitch = () => {
    setIsSignup(!isSignup)
}
const handleSubmit =(e) =>{
    e.preventDefault()
    if(!email && !password){
        alert('enter a mail or a passoword')
    }
    if(isSignup){
        if(!name){
            alert("enter a name to continue")
        }
        dispatch(signup({name,email,password},navigate))
        
    }
    else{
        dispatch(login({email,password},navigate))
    }
    console.log({name,email,password})
}
  return (
   <section class='auth-section'>
        { isSignup && <AboutAuth /> }

    <div class='auth-container-2'>
{!isSignup && <img src={icon} alt='Edunut' className='login-logo'/>}
   <form onSubmit={handleSubmit}>
    {
        isSignup && (
            <label htmlFor="name">
            <h4>Display Name</h4>
            <input type="text" id='name' name='name'onChange={(e) => {setName(e.target.value)}} />
            </label>
        )
    }
    <label htmlFor="email">
        <h4>Email</h4>
        <input type="email"name='email' id='email'onChange={(e) => {setEmail(e.target.value)}} />
    </label>
    <label htmlFor="password">

        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h4>Password</h4>
       { !isSignup && <p style={{color:"#007ac6",fontSize:"13px"}}>Forgot password</p>}
        </div>
       
        <input type="password"name='password' id='password'onChange={(e) => {setPassword(e.target.value)}}  />
        {isSignup && <p style={{color:"#666767",fontSize:"13px"}}>password must contains  8 characters <br/>including 1 upper character & 1 number</p>}
    </label>
    {
        isSignup && (
        <label htmlFor='check'>
            <input type="checkbox" id='check'/>
            <p style={{fontSize:"13px"}}>   I opt-in to receive occasional,
            product update, user research invitations,
            company announcements, and digests.
            </p>
        </label>
            )
    }
    <button type='submit'className='auth-btn'>{isSignup ? 'Sign Up' : 'Log In'} </button>
   {
    isSignup && (
        <p style={{color:"#666767",fontSize:"13px"}}>
        by clicking to sign up you agrees to our 
        <span style={{color:"#007ac6"}}> terms of services </span>and 
         <span style={{color:"#007ac6"}}> privacy policy</span> and
         <span style={{color:"#007ac6"}}> cookie policy</span>
        </p>

    )
   }
    </form> 

    <p>
        {
            isSignup ? 'Already have an account?' : "Don't have an acoount?"
        }
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup? "Log In":"Sign Up"}</button>
    </p>
    </div>

   </section>
  )
}

export default Auth 