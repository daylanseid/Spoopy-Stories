//import React, { Component } from 'react';

/*
class StoryIndex extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          //stories: []     
      }
    }
    render() {
            debugger
            return (
                <div>
                    <h1> Mah Stories </h1>
                    {props.stories.map(story => (
                    <div key = {story.id}>
                    <h2>{story.title}</h2>
                    <h3>{story.content}</h3>
                    </div>
                    ))}                          
                </div>               
            )
        }
  } 
export default StoryIndex;
*/

import React from 'react';

function StoryIndex(props) {
    return (
        <div className="storyindex">
            {props.stories.map(story => {
                return (
                    <div className="story-index" key={story.id}>
                        <img src={story.img_url} alt="Story Poster" />
                        <h1 className="story-title">Title: {story.title}</h1>
                        <h3>Author: {story.author}</h3>
                        <button className="myButton"
                            onClick={(ev) => {
                                // ev.preventDefault();
                                props.detail(story)
                                console.log(story)
                            }} >
                            View Story Detail
                        </button>
   

                    </div>
                );
            })}
        </div>
        
    );
}

export default StoryIndex;
