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

function StoryIndex(props){
    return (
        <div>
            {props.stories.map(story => {
                return (
                    <div key={story.id}>
                    <img src="http://www.scaryforkids.com/pics/look-at-me.jpg" alt="Story Poster"/>
                    <h1>Title: {story.title}</h1>
                    <h2>Author: {story.author}</h2>                      
                    </div>
                );
            })}
        </div>
    );
}

export default StoryIndex;
