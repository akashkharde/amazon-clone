import React from 'react'
import '../Css/Product.css'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useStateValue } from '../Redux/StateProvider';

function Product({id, title, price, rating, image}) {
    const [{ basket }, dispatch] = useStateValue();
      console.log('this is a basket', basket)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        
    };


    return (
            <div className='Product'>
            <div className='product_info'>
                <p>{title}</p>
                <p><CurrencyRupeeIcon style={{height: '14px'}} /> 
                    <strong>{price}</strong>
                </p>
            </div>
            <div className='product_stars'>
                {Array(rating).fill().map((_, i) => (<p><StarIcon /></p>))}
            </div>
            
                <img
                className='product_img'
                 src={image} alt='' />
          
            <button onClick={addToBasket} >Add to Cart</button>
        </div>
    )
}

export default Product