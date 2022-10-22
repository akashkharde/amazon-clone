import React, { useState} from 'react'
import '../Css/Login.css'
import { Link , } from 'react-router-dom';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        //firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        // firebase register
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>
            <div className='login_con'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}  onChange ={e => setEmail(e.target.value)} />
                    <h5>PassWord</h5>
                    <input type='password' value={password}  onChange={e => setPassword(e.target.value)} />

                    <button className='loginsignbtn' onClick={signIn} type='submit'>Sign In</button>
                </form>
                <p>We offer a wide range of Amazon Services, and sometimes additional terms may apply. When you use
                    an Amazon Service (for example, Your Profile, Gift Cards, Amazon Video, Your Media Library, Amazon
                    devices, or Amazon applications) you also will be subject to the guidelines, terms and agreements applicable
                    to that Amazon Service ("Service Terms").If these Conditions of Use are inconsistent with the Service
                    Terms, those Service Terms will control.</p>
                <button className='createAccountBtn' onClick={register} type='button'> Create Your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login