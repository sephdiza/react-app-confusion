import React,{useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes'

function MainComponent() {
    const [dishes] = useState(DISHES)
    const [selectedDish, setSelectedDish] = useState(null)

    const onDishSelect = (dishID) => {
        setSelectedDish(dishID)
    }


    return (
        <div>
            <Navbar dark color='primary'>
                <div className='container'>
                <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <MenuComponent 
                dishes={dishes} 
                onClick={(dishID) => onDishSelect(dishID)}
            />
            <DishDetailComponent 
                dish={dishes.filter(dish => dish.id === selectedDish)[0]}
            />
        </div>
    );
}

export default MainComponent;
