import Link from 'next/link';
import { some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from 'store/reducers/user';
import { RootState } from 'store';
import { ProductTypeList } from 'types';

const ProductItem = ({ thumbnail, images, id, title, price, slug }: ProductTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, productId => productId === id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id,
      }
    ))
  }

  return (
    <div className="product-item">
      <div className="product__image">
        <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>

        <Link href={`/product/${slug}`}>
          <a>
            <img src={thumbnail ? thumbnail : (images ? images[0].image : '')} alt="product" />
          </a>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{title}</h3>
        <div className="product__price" >
          <h4>${ price }</h4>
        </div>
      </div>
    </div>
  )
};


export default ProductItem