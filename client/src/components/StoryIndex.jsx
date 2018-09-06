import React, { Component } from 'react';




class StoryIndex extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          stories: []     
      }
    }

    
    render() {
            debugger
            return (
            
                <div>
                    <h1> Mah Stories </h1>
                    {this.props.stories.map(story => (
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

