import React from 'react';
import "./Header.css";


const Header = ({image, title, subtitle}) => {
    return (
        <header className="outer-container header">
            <div className="inner-container header">
                <nav className="menu">
                    <ul>
                        <li>
                            Hottest post
                        </li>
                        <li>
                            Reddit
                        </li>
                        <li>
                            Memes
                        </li>
                    </ul>
                </nav>
                <div className="header-content">
                    {image ? <>
                        <img src={image} alt={image} className="logo-image"/>
                        <h1>{title}</h1>
                        </>
                        :
                        <>
                        <h1>{title}</h1>
                        <p className="subtitle">{subtitle}</p>
                        </>
                        }
                </div>
            </div>
        </header>
    );
};

export default Header;