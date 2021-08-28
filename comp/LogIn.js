import React, { useState } from 'react'
import { auth } from '../config/Config'
import { Link } from 'react-router-dom'
import './style.css'

export const LogIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/admin');
        }).catch(err => setError(err.message));
    }

    return (
        <div className='container'>
            <br />
            <div className="text-center nav-txt">Camisitaillos</div>
            <br />
            <h2>Login</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            <span>Seuls les administrateurs peuvent se connecter <br /> Vous n'etes pas admin !!<br /> Consulter nos produits
                <Link to="/" className="link-txt"> Ici</Link>
            </span>
           
        </div>
    )
}
