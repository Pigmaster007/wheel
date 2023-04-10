
import './Active.css';

function Active () {


    const handleClick = (e) => {
        if (e.target.style.display === 'flex') {
            e.target.style.display = 'none'
        } else {
            e.target.style.display = 'flex'
        }
    }
    let extendedImg = document.getElementsByClassName('active');
    return (
    <div className='mainImg' onClick={handleClick}>
        {extendedImg}
    </div>
)}

export default Active;