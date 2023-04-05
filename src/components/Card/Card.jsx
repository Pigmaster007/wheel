import Navigation from '../Navigation/Navigation';

function Card(imgUrl) {
    const handleClick = (e) => {
      if (e.target.className === "cards") {
        e.target.className = "cardClicked"
      } else {
        e.target.className = "cards"
        }
    }
   return (
     <div key={imgUrl}>
      <Navigation name="Previous"/>
      <img src={imgUrl} alt="img"  className="cards" onClick={handleClick}/>
      <Navigation name="Next"/>
     </div>
   ) 
  }

  export default Card;