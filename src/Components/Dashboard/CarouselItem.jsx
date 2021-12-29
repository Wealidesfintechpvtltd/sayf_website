import React from 'react'
import img from './dashboard_assets/7.png'

const CarouselItem = (element) => {
    var data = element.item;
    return (
        <div className='carousel-item'>
             <img src={data['image'] == null ? img : data['image']} className='img' alt="...." />
              <p>{data['description']}</p>
        </div>
    )
}
export default CarouselItem
