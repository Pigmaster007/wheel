import './Navigation.css';

function Navigation (props) {
    if(props.name === 'Previous') {
        return <div className="Navigation leftButton" key={props.name}>{props.name}</div>
    }
    if(props.name === 'Next') {
        return <div className="Navigation rightButton" key={props.name}>{props.name}</div>
    }
    if(props.name === 'X') {
        return <div className="Navigation closeButton" key={props.name}>{props.name}</div>
    }
}

export default Navigation;