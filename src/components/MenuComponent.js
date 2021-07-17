import React from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'


function MenuComponent({ dishes, onClick }) {
    const menu = dishes.map(dish => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <Card onClick={() => onClick(dish.id)}>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardImgOverlay className="pl-5" >
                        <CardTitle tag='h4'>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>            
        )
    })
        
    return (
        <div className='container'>
            <div className='row'>
                {menu}
             </div>
        </div>
    )
}

export default MenuComponent
