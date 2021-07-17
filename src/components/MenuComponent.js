import React, { useState } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import DishDetailComponent from './DishDetailComponent'

function MenuComponent({ dishes }) {
    const [selectedDish, setSelectedDish] = useState(null)
        
    const onDishSelect = (dish) => {
        setSelectedDish(dish)
    }

    const menu = dishes.map(dish => {
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <Card onClick={() => onDishSelect(dish)}>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardImgOverlay body className="pl-5" >
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
             <DishDetailComponent dish={selectedDish}/>
        </div>
    )
}

export default MenuComponent
