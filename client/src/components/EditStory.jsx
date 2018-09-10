import React, { Component } from 'react';

class EditStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.story.title,
      author: this.props.story.author,
      genre: this.props.story.genre,
      content: this.props.story.content,
      img_url: this.props.story.img_url,
      story_url: this.props.story.story_url,
      id: this.props.story.id
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Checks if the props changed and if so resets the state
    if (this.props.story.id !== prevProps.story.id) {
      this.setState({
      title: this.props.story.title,
      author: this.props.story.author,
      genre: this.props.story.genre,
      content: this.props.story.content,
      img_url: this.props.story.img_url,
      story_url: this.props.story.story_url,
      id: this.props.story.id
      })
    }
  }


  // Handles when edit form is submitted and resets form
  handleSubmit(evt) {
    evt.preventDefault();
    const data = {
        title: this.props.story.title,
        author: this.props.story.author,
        genre: this.props.story.genre,
        content: this.props.story.content,
        img_url: this.props.story.img_url,
        story_url: this.props.story.story_url,
        id: this.props.story.id
    }
    this.props.onSubmit(data);
  }

  // Handles if the delete button is clicked to delete the podcast
  delete(e) {
    e.preventDefault();
    this.props.delete(this.state.id)
  }

  // Changes state based on user input into form
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

}

export default EditStory;