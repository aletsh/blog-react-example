import React from 'react';
import { Link } from 'react-router-dom';


export default class Button extends React.Component {

    render() {
        // if is not a link, this is a button ^^
        let classbutton = this.props.button_type == "link" ? "text-secondary" : "btn btn-primary";
        
        return (
            <Link class={classbutton} to={`/post/${this.props.post_id}`}>{this.props.button_text}</Link>
        );
    }
}