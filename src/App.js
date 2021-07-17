import React,{useState} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import MenuComponent from './components/MenuComponent';
import { DISHES } from './shared/dishes'

function App() {
  const [dishes,setDishes] = useState(DISHES)

  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes={dishes}/>
    </div>
  );
}

export default App;
