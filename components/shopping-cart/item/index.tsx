import { useDispatch } from 'react-redux';
import { removeProduct, setCount } from 'store/reducers/cart';
import { ProductStoreType } from 'types';

const ShoppingCart = ({ thumb, title, id, color, size, count, price }: ProductStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        thumb, 
        title, 
        id, 
        color, 
        size, 
        count, 
        price
      }
    ))
  }

  const setProductCount = (count: number) => {
    if(count <= 0) {
      return;
    }

    const payload = {
      product: { 
        thumb, 
        title, 
        id, 
        color, 
        size, 
        count, 
        price
      },
      count,
    }

    dispatch(setCount(payload))
  }

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{title}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="quantity-button">
          <button type="button" onClick={() => setProductCount(count - 1)} className="quantity-button__btn">
            -
          </button>
          <span>{ count }</span>
          <button type="button" onClick={() => setProductCount(count + 1)} className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td>${price}</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removeFromCart()}></i></td>
    </tr>
  )
};

  
export default ShoppingCart