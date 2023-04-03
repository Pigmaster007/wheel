import './Navigation.css';

function Navigation (elName, positionLeft, positionTop, positionRight) {
    elName.target.style.left = positionLeft + '%';
    elName.target.style.right = positionRight + '%';
    elName.target.style.top = positionTop + '%';
    
    return <div className="Navigation" key={elName}>{elName}</div>
}

export default Navigation;