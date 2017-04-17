export const Header = (props) =>
    <div className="home">
        <div className="page-header">
            <h1>{props.label.title}</h1>
            {(props.label.subtitle) ? <small>{props.label.subtitle}</small> : <span></span>}
        </div>
    </div>

Header.defaultProps = {
    label: {
        title: "",
        subtitle: ""
    }
}
/*import { Component } from 'react';
import '../styles/ui.scss';

export class Header extends Component {

    constructor(props) {
        super(props); 
        
    }

    render() {
       return( <div className="home">
            <div className="page-header">
                <h1>{this.props.title}</h1>
            </div>
        </div>
       )
    } 
} */