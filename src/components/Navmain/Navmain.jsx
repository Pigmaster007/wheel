
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Navmain.css';

function Navmain() {
    let imgArr = ['images/img0.jpg', 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
    const [index, setIndex] = useState(0);

    function decrementIndex() {
        setIndex((prevIndex) => 
        {if (prevIndex >= 0) {
            prevIndex = prevIndex - 1
            console.log(prevIndex)
        } else {
            prevIndex = imgArr.length
            console.log(prevIndex)
        }
        })
    }

    function inkrementIndex() {
        setIndex((prevIndex) => 
        {if (prevIndex <= imgArr.length) {
            prevIndex = prevIndex + 1
            console.log(prevIndex)
        } else {
            prevIndex = 0
            console.log(prevIndex)
        }
        })
    }

    const closeImg = (e) => {
        e.preventDefault();
        alert('test');
        e.target.parentNode.parentNode.style.display = 'none'
    }

    const closeImgX = (e) => {
        alert('test');
        e.preventDefault();
        e.target.parentNode.style.display = 'none'
    }

    return (
    <div className="NavMain">
        <Navigation name="Previous" onClick={decrementIndex}/>
        <div><img src={imgArr[index]} alt="img" className="active" onClick={closeImg}/></div>
        <Navigation name="Next" onClick={inkrementIndex}/>
        <Navigation name="X" onClick={closeImgX}/>
    </div>    
)}

export default Navmain;