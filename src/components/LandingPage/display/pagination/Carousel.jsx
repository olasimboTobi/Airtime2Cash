import React from 'react'
import Carousel from "react-elastic-carousel";
import {cardInfo} from '../../../../assets/links/links'
import {Item} from './CarouselStyle'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Pagination = () => {
  return (
    <Item>
        <Carousel breakPoints={breakPoints}>
          {cardInfo.map((item)=>{
            const {id, header, text} = item
            return(
                <div className='content' key={id}>
                    <h2>{header}</h2>
                    <p>{text}</p>
                </div>
            )
          })}
        </Carousel>
      </Item>
  )
}

export default Pagination

