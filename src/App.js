import './App.css';
import Card from './components/Card/Card';

function App() {
  let imgArr = ['images/img0.jpg', 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];  
  let allImgArr = imgArr.map(el => Card(el));


return (
  <div className='imgCard'>
    {allImgArr}
  </div>
);

}

export default App;
