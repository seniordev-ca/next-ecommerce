import { ProductType } from 'types';

type ReviewsProductType = {
  show: boolean;
  product: ProductType
}

const Reviews = ({ show }: ReviewsProductType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__reviews">
    </section>
  );
};
  
export default Reviews;
    