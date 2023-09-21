import React from 'react'
// import {displayIcons} from '../../assets/links/links';
import {CardStyle} from './Card.styles'


const Card = ({image, title, text, id}) => {
  return (
    <CardStyle>
        <div className="box" id={id}>
            <img src={image} alt="operation-icon" />
            <h3>{title}</h3>
            <p>
                {text}
            </p>
        </div>
    </CardStyle>
  )
}
export default Card

       