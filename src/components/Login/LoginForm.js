import React from 'react';

function LoginForm(props) {
    return (
        <>
            <form>
                <label>Email:</label>
                <input 
                type='email'
                placeholder='Email address' />
                
                <label>Password:</label>
                <input 
                type='password' 
                placeholder='Password'/>
                <button>Log in</button>

            </form>
        </>
    );
}

export default LoginForm;