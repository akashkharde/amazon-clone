import React from 'react'
import '../Css/CheakOutProduct.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../Redux/StateProvider'

function CheakOutProduct({ id, title, image, rating, price }) {

    const [{ basket } ,dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id
            })
    }

    return (
        <div className='CheakOutProduct_main'>

            <img  className='CheakOutProduct_img' src={image} alt='' />
            <div className='CheakOutProduct_info'>
                <p>{title}</p>
                <p><small>&#8377;</small> <strong>{price}</strong> </p>
                <div className='CheakOutProduct_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p><StarIcon /></p>
                    ))}
                </div>
                <button onClick={removeFromBasket} type='button'> Remove From the Basket</button>
            </div>

        </div>
    )
}

export default CheakOutProduct