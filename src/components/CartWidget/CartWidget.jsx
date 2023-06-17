import '../CartWidget/cartWidget.css'
import { Link } from 'react-router-dom';

import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';


const CartWidget = () => {

    const {getItemQuantity} = useContext(CartContext)

    return ( 
        <Link to='/Cart'>
            <button type="button" className="btn btn-secondary position-relative mx-3">
                <img className='imgCarrito' src= '../img/carrito-de-compras.png' alt="" />
                {getItemQuantity()>0 &&   
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {getItemQuantity()}
                </span>
                }
            </button>
        </Link>
      
    );
}

export default CartWidget;
