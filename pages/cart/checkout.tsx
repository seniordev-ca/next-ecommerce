import React, { useState, ChangeEvent } from 'react';
import Layout from '../../layouts/Main';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import { postData } from '../../utils/services'; 
import { server } from '../../utils/server'; 
import { RootState } from 'store';
import { clearCart } from 'store/reducers/cart';

interface ShippingInfo {
  email: string;
  address: string;
  firstName: string;
  lastName: string;
  city: string;
  phoneNumber: string;
  postalCode: string;
}

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    email: '',
    address: '',
    firstName: '',
    lastName: '',
    city: '',
    phoneNumber: '',
    postalCode: ''
  });

  const { cartItems } = useSelector((state: RootState) => state.cart);
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prevShippingInfo) => ({
      ...prevShippingInfo,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Check if any field is empty
    const isEmpty = Object.values(shippingInfo).some((value) => value === '');
    if (isEmpty) {
      alert('Please fill in all shipping fields.');
      return;
    }
    // Place Order logic here
    postData(`${server}/api/checkout`, {
      shippingInfo,
      cartItems
    }).then(res => res.data)
    .then(data => {
      alert(`Your Order Number is here: ${data.order_number}`);
      dispatch(clearCart());
      setTimeout(() => {
        window.location.href = '/products';
      }, 500);
    });

  };


  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input 
                        className="form__input form__input--sm" 
                        type="email"
                        name="email"
                        value={shippingInfo.email}
                        onChange={handleInputChange}
                        placeholder="Email" 
                      />
                    </div>

                    <div className="form__col">
                      <input 
                        className="form__input form__input--sm" 
                        type="text" 
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleInputChange}
                        placeholder="Address" 
                      />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input 
                        className="form__input form__input--sm" 
                        type="text" 
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleInputChange}
                        placeholder="First name" 
                      />
                    </div>

                    <div className="form__col">
                      <input 
                        className="form__input form__input--sm" 
                        type="text" 
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                        placeholder="City" 
                      />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input 
                        className="form__input form__input--sm" 
                        type="text"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleInputChange}
                        placeholder="Last name" 
                      />
                    </div>

                    <div className="form__col">
                      <input 
                        className="form__input form__input--sm" 
                        type="text" 
                        placeholder="Postal code / ZIP"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input 
                        className="form__input form__input--sm"
                        type="tel"
                        name="phoneNumber"
                        value={shippingInfo.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Phone number" 
                      />
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select>
                          {/* <option>Country</option> */}
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-6">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />
                
                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>${priceTotal}</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back"><i className="icon-left"></i> Back</a>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">Continue shopping</button>
              <button type="button" className="btn btn--rounded btn--yellow" onClick={handleSubmit}>Place Order</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
};

  
export default CheckoutPage