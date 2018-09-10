import React from 'react';

function Header(props) {
    const { links } = props;
    return (
        <div className="App-header" >
        <h1  className="halloween-animation" href="#">Spoopy Stories</h1>
            <div className="header">
            {links.map(link => {
          return <div 
            key={link}
            className="link" 
            onClick={() => props.onClick(link)}
          >{link}</div>
        })}
        </div>
        </div>
    );
}

export default Header;