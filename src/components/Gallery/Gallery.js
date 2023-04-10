import './Gallery.css';
import Card from '../Card/Card';

function Gallery() {
  let imgArr = ['images/img0.jpg', 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];  
  let allImgArr = imgArr.map(el => Card(el));

return (
  <div className='Gallery'>
    {allImgArr}
  </div>
);

}

export default Gallery;
