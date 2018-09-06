import React, { Component } from 'react';
import logo from './logo.svg';
import StoryIndex from './components/StoryIndex';
import StoryDetails from './components/StoryDetails';

import './App.css';
import { getStories, getComments }from './services/api';

getStories()
  .then(data => console.log(data));

//getComments()
//  .then(data => console.log(data))
//  .catch(err => console.log(err));



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      comments: [],
    }
    
  }

  componentDidMount() {
    getStories()
      .then(data => {
        //debugger
        this.setState({ stories: data })});
  }


  render() {
    return (
      <div className="App">
      <StoryIndex stories = {this.state.stories} />
      </div>
    );
  }
}

export default App;
