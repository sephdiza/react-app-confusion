import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

function DishDetailComponent({ dish }) {

    const renderDish = (dish) => {
        if (dish != null) {
            return(
                <div className='col-12 col-md-5 m-1'>
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
                </div>
            )   
        } else {
            return (
                <div></div>
            )
        }
    }

    const renderComments = (dish) => {
        if (dish != null) {
            return(
                <div className='list-unstyled col-12 col-md-5 m-1'>
                    <div>
                        <h4>Comments</h4>
                        {dish.comments.map(({comment, author, date}) => 
                        <div key={author}>
                            <p>{comment}</p>
                            <p>--{author}, {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                                }).format(new Date(Date.parse(date))
                            )}
                            </p>
                        </div>
                    )}
                    </div>
                </div>
            )   
        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                {renderDish(dish)}
                {renderComments(dish)}
            </div>
        </div>
        
    )
}

export default DishDetailComponent
