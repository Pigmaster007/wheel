import Navigation from '../Navigation/Navigation';

function Main() {
    return (
    <div className="Main">
        {Navigation('Previous', 5, 50)}
        {Navigation('Next', 'auto', 50, 5)}
        {Navigation('X', 5, 5)}
    </div>    
)}

export default Main;