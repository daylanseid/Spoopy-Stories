import React, { Component } from 'react';
import Header from './components/Header';
import StoryIndex from './components/StoryIndex';
import StoryDetails from './components/StoryDetails';
import CreateStory from './components/CreateStory';
import EditStory from './components/EditStory';
import HomePage from './components/Homepage';


import './App.css';
import {
  getStories, 
  getOneStory, 
  saveStory,
  updateStory,
  deleteStory}from './services/api';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Story Index',
      selectedStory: '',
      stories: [],
      comments: [],
      storyDetails: {},
      
    }
    this.selectStory = this.selectStory.bind(this);
    this.createStory = this.createStory.bind(this);
    this.getAStory = this.getAStory.bind(this);
    this.updateStory = this.updateStory.bind(this);
    this.deleteStory = this.deleteStory.bind(this);
  }

//When the page loads, all stories will show
  componentDidMount() {
    this.fetchAllStories()
  }

//FETCHES ALL STORIES
fetchAllStories() {
  getStories()
    .then(data => {
      this.setState({
        stories: data.stories,
      })
    })
}


//SELECTED STORY GETS UPDATED
  selectStory(story) {
    this.setState({
      selectedStory: story,
      currentView: 'Edit Story'
    });
  }

//CREATE A STORY
  createStory(story) {
    saveStory(story)
    .then(data => getStories())
    .then(data => {
      this.setState ({
        currentView: 'Story Index',
        stories: data.stories
      });
    });
  }

//GET ONE STORY
getAStory(story) {
  getOneStory(story.id)
    .then(data => {
      this.setState({
        selectedStory: data.story,
        currentView: 'Story Detail'
      });
    })
}

//UPDATE A STORY
updateStory(story) {
  updateStory(story)
    .then(data => getOneStory())
    .then(data => {
      this.setState({
        currentView: 'Edit Story',
        story: data.story,
        selectedStory: data.story
      });
    })
}

//  // Updates story and rerenders the index and details
//  updateStory(story) {
//   updateStory(story)
//     .then(data => {
//       this.setState({
//         storyDetails: [data]
//       })
//       this.fetchAllStories()
//         .then(data => this.setState({ 
//           story: data 
//         }));
//     });
// }


  //DELETE STORY
 // Deletes a podcast and rerenders the index
 deleteStory(story_id) {
  deleteStory(story_id)
    .then(data => {
      getStories()
        .then(data => 
          this.setState({
          stories: data.stories,
          comments: [],
          storyDetails: {},
          currentView: 'Story Index'
        }));
    });
}


  determineWhichToRender() {
    const { currentView } = this.state;
    const { stories, selectedStory, selectStory } = this.state;

    switch (currentView) {
      case 'Story Index':
        return <StoryIndex
         stories={this.state.stories}
         detail = {this.getAStory}
         onSubmit = {this.fetchAllStories}
         view={this.fetchAllComments}
         />;
        break;
        case 'Create Story':
        return <CreateStory 
        onSubmit={this.createStory}
        />;
        break;
        case 'Edit Story':
        const story = stories.find(story => story.id === selectedStory.story_id);
        return <EditStory
        onSubmit={this.updateStory}
        story = {story}
        story={this.state.selectedStory}
         />;
         break;
         case 'Story Detail':
         return <StoryDetails
         onClick={this.selectStory}
         story={this.state.selectedStory}
         edit= {this.getAStory}
         delete ={this.deleteStory}
         />;
         break;
         case 'Home Page':
         return <HomePage 
         />;

    }
  }

  handleLinkClick(link) {
    this.setState({currentView: link});
  }


  render() {
    const links = [
      'Story Index',
      'Edit Story',
      'Create Story',
    ];


    return (
      <div>
     <Header 
     onClick ={this.handleLinkClick.bind(this)} 
     links={links}/>
     {this.determineWhichToRender()}
     <Footer />
      </div>
    );
  }
}

export default App;
