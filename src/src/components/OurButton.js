import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurButton.css'

export default function OurButton(props) {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`btn our-btn`}
            style={props.style}
        >
            {props.children}
        </button>
    );
}