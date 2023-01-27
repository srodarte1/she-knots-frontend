import { useNavigate } from 'react-router-dom';

const Cart = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

    return(
        <div>
          <img className="cart-logo" src="https://foodhub.vn/assets/images/no-cart.png" alt="cart"/>
          <h2 className="cart-title">Oops! Your Cart is Empty?</h2>
          <h3>Looks like you haven't anything yet to your car</h3>
          <button onClick= {handleClick}className="continue-shopping">Shop Now</button>
        
            
        </div>
    )
}

export default Cart