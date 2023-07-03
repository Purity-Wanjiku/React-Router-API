import React, {useState} from "react";
import './login.css';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    console.log(username);
    console.log(email);
    console.log(password);


    const submitting = async (i) => {
        i.preventDefault();
        const loginData = {
            username: username,
            email: email,
            password: password
        };
        console.log({ loginData });
  


    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });
        const result = await response.json();
        console.log(result);
    }
    catch (error) {
        console.log(error.message);
        }
};
    return (
        <div>
         <form className="loginform" onSubmit={submitting}>
            <h1>Login</h1>
                <input placeholder="Username" type="text"
                 onChange={(i) => setUsername(i.target.value)}
                />
            <br/>
            <br/>
                <input placeholder="Email address" type="email"
                onChange={(i) => setEmail(i.target.value)}
                />
            <br/>
            <br/>
                <input placeholder="password" type="password"
                onChange={(i) => setPassword(i.target.value)}/>
            <br/>
            <br/>
                <button type="submit">Login</button>  
         </form>
        </div>
)
};
export default Login;