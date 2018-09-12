import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import StoryIndex from './components/StoryIndex';
import StoryDetails from './components/StoryDetails';
import CreateStory from './components/CreateStory';
import EditStory from './components/EditStory';

import './App.css';
import {
  getStories, 
  getComments, 
  getOneStory, 
  saveStory,
  updateStory,
  deleteStory}from './services/api';
import Footer from './components/Footer';

//getOneStory(1)
//.then(data => console.log(data.story));


//getStories()
//.then(data => console.log(data.stories));

getComments(1)
 .then(data => console.log(data.comments))
  .catch(err => console.log(err));


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Story Index',
      selectedStory: '',
      stories: [],
      comments: [],
      storyDetails: {},
      editModal: 'modal',
    }
    this.selectStory = this.selectStory.bind(this);
    this.createStory = this.createStory.bind(this);
    this.fetchAllComments = this.fetchAllComments.bind(this);
    this.getAStory = this.getAStory.bind(this);
    this.updateStory = this.updateStory.bind(this);
    this.deleteStory = this.deleteStory.bind(this);
  }
  //When the page loads, all stories will show
  componentDidMount() {
    getStories(1)
      .then(data => {
        //debugger
        //console.log(data.stories);
        this.setState({ stories: data.stories })});
  }


//GET ALL REVIEWS FOR A STORY
fetchAllComments(id, title) {
  getComments(id)
    .then(data => {
      this.setState({
        reviews: data,
        storyDetails: title
      })
    }
    );
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
        currentView: 'Create Story',
        stories: data.stories
      });
    });
  }

//GET ONE STORY
getAStory(story) {
  //console.log(story)
  getOneStory(story.id)
    .then(data => {
      debugger
      console.log(data);
      this.setState({
        selectedStory: data.story,
        currentView: 'Story Detail'
      });
    })
}

//UPDATE A STORY
  updateStory(story) {
    //console.log(story);
    updateStory(story)
      .then(data => getOneStory())
      .then(data => {
        this.setState({
          currentView: 'Edit Story',
          stories: data.stories
        });
      })
  }

  //DELETE STORY
 // Deletes a podcast and rerenders the index
 deleteStory(id) {
  deleteStory(id)
    .then(data => {
      getStories()
        .then(data => this.setState({
          stories: data.stories,
          comments: [],
          storyDetails: {},
        }));
    });
}





  determineWhichToRender() {
    const { currentView } = this.state;
    const { stories, comments, selectedStory } = this.state;

    switch (currentView) {
      case 'Story Index':
        return <StoryIndex
         stories={this.state.stories}
         detail = {this.getAStory}
         //selectStory={this.selectStory}
         view={this.fetchAllComments}
         />;
        break;
        case 'Create Story':
        return <CreateStory 
        onSubmit={this.createStory}
        />;
        break;
        case 'Edit Story':
        //const story = stories.find(story => story.id === selectedStory.id);
        return <EditStory
        onSubmit={this.updateStory}
        story={this.state.selectedStory}
        active={this.state.editModal} 
        delete={this.deletePodcast}
         />;
         break;
         case 'Story Detail':
         return <StoryDetails
         onClick={this.selectStory}
         story={this.state.selectedStory}
         edit= {this.getAStory}

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
      'Create Comment',
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
