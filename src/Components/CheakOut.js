import React from 'react'
import '../Css/CheakOut.css'
import { useStateValue } from '../Redux/StateProvider'
import CheakOutProduct from './CheakOutProduct'
import Subtotal from './Subtotal';



function CheakOut() {
   const [{ basket, user }, dispatch] = useStateValue();

   return (<>

      <div className='cheakout'  >

         <div className='cheakout_left'>
            <div className='cheakout_title'>
              <div>
              <p>Your  Shopping Cart</p>
              </div>
              <div>
              <p>Hello { user?.email}</p>
              </div>
            </div>
            
            <hr />
            <div className='cheakoutProduct'>
               {basket.map(item => (
                  <CheakOutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                  />
               ))}
            </div>
         </div>



         <div className='cheakout_right'>
            <div className='cheakout_items'>
               <Subtotal />
            </div>

         </div>
      </div>

   </>
   )
}

export default CheakOut