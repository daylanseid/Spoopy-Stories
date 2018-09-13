import React from 'react';

function Header(props) {
  const { links } = props;
  return (
    <div className="App-header" >
      <div className="body">
        <h1 className="neon">Spoopy Stories</h1>
      </div>
      <div className="header">
        {links.map(link => {
          return <div className="halloween-animation" href="#"
            key={link}
            onClick={() => props.onClick(link)}
          >{link}</div>
        })}
      </div>
        <h2 className="word-flash">
        <span className="flash">There's</span>
        <span className="light">darkness</span>
        <span className="flash"> even in</span>
        <span className="flash">the lightest</span>
        <span className="flash">places</span>
      </h2>  
    </div>
  );
}

export default Header;