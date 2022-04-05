import React from 'react';
import "./Footer.css";

const Footer = ({text}) => {
    return (
        <div className="outer-container footer">
        <footer className="inner-container footer">
            <p>{text}</p>
        </footer>
        </div>
    );
};

export default Footer;