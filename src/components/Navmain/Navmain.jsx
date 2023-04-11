
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Navmain.css';

function Navmain() {
    let imgArr = ['images/img0.jpg', 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
    const [index, setIndex] = useState(0);

    function decrementIndex() {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1)
        } else {
            setIndex((prevIndex) => prevIndex = imgArr.length - 1)
        }
    }

    function inkrementIndex() {
        if (index < imgArr.length -1) {
            setIndex((prevIndex) => prevIndex + 1)
        } else {
            setIndex((prevIndex) => prevIndex = 0) 
        }
    }

    const closeImg = (e) => {
        e.preventDefault();
        e.target.parentNode.parentNode.style.display = 'none'
    }

    const closeImgX = (e) => {
        e.preventDefault();
        e.target.parentNode.style.display = 'none'
    }

    return (
    <div className="NavMain">
        <Navigation name="Previous" handleClick={decrementIndex}/>
        <div><img src={imgArr[index]} alt="img" className="active" onClick={closeImg}/></div>
        <Navigation name="Next" handleClick={inkrementIndex}/>
        <Navigation name="X" handleClick={closeImgX}/>
    </div>    
)}

export default Navmain;