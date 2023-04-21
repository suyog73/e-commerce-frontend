import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const APIUrl = process.env.REACT_APP_API_URL;
console.log(APIUrl);
const baseUrl = APIUrl + "/user/register";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/');
        }
    })


    const handleSubmit = async () => {
        console.warn(name, email, password);
        let result = await fetch(baseUrl, {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);

        if (result) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.token));
            navigate('/');
        }
    }

    return (
        <div className='register'>
            <h1 >Register</h1>

            <input value={name} onChange={(e) => setName(e.target.value)}
                className='inputBox' type="text" placeholder='Enter Name' />

            <input value={email} onChange={(e) => setEmail(e.target.value)}
                className='inputBox' type="text" placeholder='Enter Email' />

            <input value={password} onChange={(e) => setPassword(e.target.value)}
                className='inputBox' type="password" placeholder='Enter Password' />

            <button onClick={handleSubmit} className='appButton' type='button'>Sign Up</button>
        </div>

    )
}

export default Signup;
