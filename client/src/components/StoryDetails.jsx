import React from 'react';


export default  (props) => {
console.log(props)
    return (
      <div className="story-details" >
        <h3 key={props.story.id} >Story Details<br /></h3>
        <img src={props.story.img_url} alt="Img Poster" />
        <br />
        <br />    
        <br />
        <h4>Story: <span>{props.story.title}</span></h4>
        <h4>Author: <span>{props.story.author}</span></h4>
        <h4>Content: <span>{props.story.content}</span></h4>
        <br />
        {props.story.story_url ? 
        <a href={props.story.story_url}>Click here for Story</a>
        : null}
      </div>)
}

//<button className='button' onClick={(e) => props.edit(props.story.id)}>Edit Story</button>
