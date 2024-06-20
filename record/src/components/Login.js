import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/RestApi';
const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(username, password);
            if (response.success) {
                setLoggedIn(true);
                navigate('/chat');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Login error', error);
            alert('Login error');
        }
    };

    return (
    <table>
        <tr>        
            <h2 className="main_name">Login</h2>
        </tr>
    <tr>
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <div >
                <input className="main_input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <label>Password</label>
            <div>
                <input className="main_input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    </tr>
    </table>
    );
};

export default Login;