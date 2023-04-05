function Card(imgUrl) {
    const handleClick = (e) => {
      if (e.target.className === "cards") {
        e.target.className = "cardClicked"
      } else {
        e.target.className = "cards"
        }
    }
   return <img src={imgUrl} key={imgUrl} alt="img" className="cards" onClick={handleClick}/> 
  }

  export default Card;