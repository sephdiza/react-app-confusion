import React, { useState } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

function MenuComponent({ dishes }) {
        const [selected, setSelected] = useState(null)

        const onDishSelect = (dish) => {
            setSelected(dish)
        }

        const renderDish = (dish) => {
            if (dish != null) {
                return(
                    <Card>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle tag='h4'>
                                {dish.name}
                            </CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                )   
            } else {
                return (
                    <div></div>
                )
            }
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
             <div className='row'>
                {renderDish(selected)}
             </div>
        </div>
    )
}

export default MenuComponent
