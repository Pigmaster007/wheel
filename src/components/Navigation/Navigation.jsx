import './Navigation.css';

function Navigation (props) {
    return <div className="Navigation" key={props.name}>{props.name}</div>
}

export default Navigation;