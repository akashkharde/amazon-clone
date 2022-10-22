import React from 'react'
import '../Css/Home.css'
import BackImage from '../Images/prime.png'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_con'>
        <img
          className='home_image'
          src={BackImage}
          alt='' />


          <div className='product_row'>
          <Product
            id={'1210'}
            title={'Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)'}
            price={100546}
            image={'https://m.media-amazon.com/images/I/71L-lTQnJiL._SX450_.jpg'}
            rating={5}
          />
          <Product
            id={'1211'}
            title={'AmazonBasics 139 cm (55 inches) 4K Ultra HD Smart LED Fire TV AB55U20PS (Black)'}
            price={5305}
            image={'https://m.media-amazon.com/images/I/71GWurOTPpL._SL1240_.jpg'}
            rating={5}
          />
        </div>

        <div className='product_row'>
          <Product
            id={'1213'}
            title={'Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 256GB Storage) + Samsung Galaxy Watch4'}
            price={80324}
            image={'https://m.media-amazon.com/images/I/71JT7AirReL._SX679_.jpg'}
            rating={5}
          />
          <Product
            id={'1214'}
            title={'OnePlus Nord CE 2 5G (Bahamas Blue, 6GB RAM, 128GB Storage)'}
            price={2094}
            image={'https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SX679_.jpg'}
            rating={5}
          />
          <Product
            id={'1215'}
            title={'Redmi 9 Activ (Metallic Purple, 4GB RAM, 64GB Storage) | Octa-core Helio G35 | 5000 mAh Battery'}
            price={3099}
            image={'https://m.media-amazon.com/images/I/919IyPIfczL._SX679_.jpg'}
            rating={5}
          />
        </div>
        <div  className='product_row'>
        <Product
            id={'1215'}
            title={'Redmi 9 Activ (Metallic Purple, 4GB RAM, 64GB Storage) | Octa-core Helio G35 | 5000 mAh Battery'}
            price={4099}
            image={'https://images.lifestyleasia.com/wp-content/uploads/2019/05/02000958/00-QLED-8K-Perfect-Reality-091118-DT-v2.jpg'}
            rating={5}
          />
        </div>
      </div>

    </div>
  )
}

export default Home