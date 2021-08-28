import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom'
import { auth } from '../config/Config'
import './style.css'
import { Link } from 'react-router-dom'



export const Admin= ({ user }) => {

    const history = useHistory();

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div>
        <div className='navbox'>
            <div className='leftside'>
                <p><Link className='navlink' to="/">Camisitaillos</Link></p>
            </div>
            
            {user && <div className='rightside'>
                <span>{user}</span>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
        <div className='buttons'>
            <span><button className='admin-btn'><Link to="/signup" className='navlink'>Add New Admin</Link></button></span>
            <br />
            <span><button className='admin-btn'><Link to="/addprd" className='navlink'>Add Men Product</Link></button></span>
            <br />
            <span><button className='admin-btn'><Link to="/addwprd" className='navlink'>Add Women Product</Link></button></span>
            <br />
            <span><button className='admin-btn'><Link to="/addaccprd" className='navlink'>Add Accessories</Link></button></span>
            <br />
            <span><button className='admin-btn navlink' onClick={handleLogout}>Logout</button></span>
        </div>
        </div>
    );
}

