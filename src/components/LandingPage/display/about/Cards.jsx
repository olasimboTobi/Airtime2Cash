import React from 'react'
import Dashboard from '../../../../assets/icons/Dashboard.png';
import Login from '../../../../assets/icons/Login.png';
import Vector from '../../../../assets/icons/Vector.png';
import Card from './Card'
import {CardsStyle} from './Cards.style'


const Cards = () => {
    return (
        <CardsStyle>
            <Card
                image={Login}
                title='Login or Register'
                text='To get started with Airtime2Cash, register and login.'
                id='box-1'
            />
            <Card
                image={Dashboard}
                title='Deposit From Dashboard'
                text='Deposit cash into your wallet and transfer to your preffered bank account.'
                id='box-2'
            />
            <Card
                image={Vector}
                title='Convert'
                text='Let us convert airtime on your mobile device to cash'
                id='box-3'
            />
        </CardsStyle>
    )
}

export default Cards