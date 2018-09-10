import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import StoryIndex from './components/StoryIndex';
import StoryDetails from './components/StoryDetails';
import CreateStory from './components/CreateStory';
import EditBook from './components/EditBook';

import './App.css';
import {
  getStories, 
  getComments, 
  getOneStory, 
  saveStory,
  updateStory }from './services/api';
import Footer from './components/Footer';

//getStories()
//.then(data => console.log(data));

getComments()
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
    }
    this.selectStory = this.selectStory.bind(this);
    this.createStory = this.createStory.bind(this);
  }
  //When the page loads, all stories will show
  componentDidMount() {
    getStories()
      .then(data => {
        //debugger
        console.log(data.stories);
        this.setState({ stories: data.stories })});
  }

  selectStory(story) {
    this.setState({
      selectedStory: story,
      currentView: 'Edit Story'
    });
  }


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


  determineWhichToRender() {
    const { currentView } = this.state;
    const { stories, comments, selectedStory } = this.state;

    switch (currentView) {
      case 'Story Index':
        return <StoryIndex
         stories={stories}/>;
        break;
        case 'Create Story':
        return <CreateStory 
        onSubmit={this.createStory}
        />;
        break;
    }
  }

  handleLinkClick(link) {
    this.setState({currentView: link});
  }


  render() {
    const links = [
      'Story Index',
      'Comment Index',
      'Create Story',
      'Create Comment'
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
