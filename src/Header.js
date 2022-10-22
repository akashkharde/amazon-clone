import React from 'react'
import './Css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './Redux/StateProvider';
import { auth } from './Components/Firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
    return (

        <div className='header'>
            <Link to = '/'>
            <img className='header_logo'
                alt='logo'
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>
           


            <div className='header_input'>
                <input placeholder='Search...' />
                <SearchIcon className='header_serchIcon' />
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                <div className='header_option'onClick={handleAuthentication} >
                    <span className='header_optionone'>Hello{!user ? ', User' : ', ' + user.email }  </span>
                    <span className='header_optiontwo' >{user ? 'Sigh Out' : 'Sign In' }</span>
                </div>
                </Link>


                <div className='header_option'>
                    < span className='header_optionone'>return</ span>
                    < span className='header_optiontwo'>& order</ span>
                </div>

                <div className='header_option'>
                    < span className='header_optionone'>Your</ span>
                    < span className='header_optiontwo'>Prime</ span>
                </div>
                <Link to = "/cheak">
                <div className='header_option' style={{height: '47px'}}> 
                    <AddShoppingCartIcon className='header_cartIcon' />
                    < span className='header_optiontwo' style={{marginTop: '-5px' , marginLeft: '7px'}}>{basket?.length}</span>  
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Header