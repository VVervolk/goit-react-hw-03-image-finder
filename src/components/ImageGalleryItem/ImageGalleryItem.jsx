import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, largeImage, onClick }) => {
  return (
    <Item onClick={onClick}>
      <Image src={src} alt={alt} data-modalimage={largeImage} />
    </Item>
  );
};
