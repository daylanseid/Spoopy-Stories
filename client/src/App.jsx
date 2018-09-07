import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import StoryIndex from './components/StoryIndex';
import StoryDetails from './components/StoryDetails';

import './App.css';
import { getStories, getComments }from './services/api';
import Footer from './components/Footer';

//getStories()
//.then(data => console.log(data));

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
        console.log(data.stories);
        this.setState({ stories: data.stories })});
  }





  render() {
    return (
      <div>
    <Header recipe={this.state.recipe} />
     <StoryIndex stories={this.state.stories} /> 
     <Footer />
      </div>
    );
  }
}

export default App;
