import ProductItem from './../../product-item';
import { ProductTypeList } from 'types';

// import Swiper core and required components
import { Swiper, SwiperSlide } from 'swiper/react';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if(window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if(window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

type ProductsCarouselType = {
  products: ProductTypeList[]
}

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper 
      spaceBetween={spaceBetween} 
      loop={true} 
      centeredSlides={centeredSlides} 
      watchOverflow={true} 
      slidesPerView={slidesPerView} 
      className="swiper-wrapper">
        {products.map(item => (
          <SwiperSlide key={item.id}>
            <ProductItem 
              id={item.id} 
              title={item.title}
              price={item.price}
              key={item.id}
              images={item.images} 
              thumbnail={item.thumbnail}
              slug={item.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductsCarousel