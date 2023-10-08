import { useState } from "react"

export default function UsersLogin(){
    const[email,setEmail] = useState('')
    const[password,setPassword]= useState('')
    const [confirmPassowrd, setConfirmPassword] = useState('');
    const [message,setMessage] = useState('')
    function FindErrors(){
        const errors = []
        if(!email|| !password || confirmPassowrd) errors.push('each items need to be filled in')
        if([...email].filter(i=> i === '@').length!==1) errors.push(' there should be one exact @ sign')
        if(password === confirmPassowrd) errors.push('passwords must match')
        return errors
    }
    const handleSubmit = e=>{
        e.preventDefault()
        const errors = FindErrors()
        setMessage(errors.length ? errors.join(", ") : "user Created");
        

    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={e=>setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            
        </form>
    )
} 