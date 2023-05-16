import { useSelector } from 'react-redux';

const CheckoutItems = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <ul className="checkout-items">
      {cartItems.map(item => (
        <li className="checkout-item" key={item.id}>
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={item.thumb} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.title}</h3>
              <span>X {item.count}</span>
            </div>
          </div>
          <h3>${item.price}</h3>
        </li>
      ))}
    </ul>
  )
};

  
export default CheckoutItems