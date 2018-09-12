import React from 'react';

function Header(props) {
    const { links } = props;
    return (
        <div className="App-header" >
        <h1 className="App-title">Spoopy Stories</h1>
            <div className="header">
            {links.map(link => {
          return <div className="halloween-animation" href="#"
            key={link}
             
            onClick={() => props.onClick(link)}
          >{link}</div>
        })}
        </div>
        <h2>
  <span className="flash">There's</span>  
  <span className="light">light</span> 
  <span className="flash"> even in</span> 
  <span className="flash">the darkest</span>  
  <span className="flash">places</span>
</h2>
        </div>
    );
}

export default Header;