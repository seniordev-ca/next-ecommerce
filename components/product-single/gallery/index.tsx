import ImageWithPlaceholder from 'components/common/ImageWithPlaceholder'
import { useState } from 'react';

type GalleryProductType = {
  images: any[]
}

const Gallery = ({ images }: GalleryProductType) => {
  const [featImage, setFeatImage] = useState(images[0].image);

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map(image => (
          <div key={image.id} className="product-gallery__thumb" onClick={() => setFeatImage(image.image)}>
            <ImageWithPlaceholder
              imageUrl={image.image} 
              alt="product image"
            />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <ImageWithPlaceholder
          imageUrl={featImage} 
          alt="product image"
        />
      </div>
    </section>
  );
};
  
export default Gallery;
  