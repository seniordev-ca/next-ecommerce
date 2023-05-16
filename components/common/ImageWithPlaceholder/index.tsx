import React, { ReactElement, SyntheticEvent } from 'react';

interface ImageWithPlaceholderProps {
  imageUrl: string;
  placeholderUrl?: string;
  alt: string;
}

const ImageWithPlaceholder = ({
  imageUrl,
  placeholderUrl,
  alt
}: ImageWithPlaceholderProps): ReactElement => {
  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = placeholderUrl ?? process.env.NEXT_PUBLIC_PLACEHOLDERIMAGE_URI ?? '';
  };

  return <img src={imageUrl} alt={alt} onError={handleImageError} />;
};

export default ImageWithPlaceholder;
