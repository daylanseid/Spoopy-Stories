import React from 'react';


export default  (props) => {
console.log(props)
    return (
      <div className="story-details" >
        <img className="detail-img"src={props.story.img_url} alt="Img Poster" />
        <br />
        <h4><span className="detail-title">{props.story.title}</span></h4>
        <br />
        <h4 className="detail-names">Author: <span className="detail">{props.story.author}</span></h4>
        <h4 className="detail-names">Genre: <span className="detail">{props.story.genre}</span></h4>
        <br />
        <h4> <span className="screen">{props.story.content}</span></h4>
        {/* <h4>Comments: {props.story.comment}</h4>  */}
        <br />
        <br />
        {/* <button className ='edit-button' onClick={(e) => props.edit(props.story.id)}>Edit Story</button> */}
        <button className ='delete-button' onClick={(e) => props.delete(props.story.id)}>Delete</button>
        <br />
        <br />
        {props.story.story_url ? 
        <a href={props.story.story_url}>Click here for Story</a>
        : null}
      </div>)
}


