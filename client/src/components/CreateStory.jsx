import React, { Component } from 'react';
//same as createbook, just with author
class CreateAuthor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      genre:'',
      content:'',
      img_url: '',
      story_url:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div>
        <h2>Create Story</h2>
        <form onSubmit={this.handleSubmit}>
          <label> Title </label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title} />
          <label> Author </label>
          <input
            type="text"
            name="author"
            onChange={this.handleChange}
            value={this.state.author} />
          <label> Genre </label>
          <input
            type="text"
            name="genre"
            onChange={this.handleChange}
            value={this.state.genre} />
          <label> Content </label>
          <input
            type="text"
            name="content"
            onChange={this.handleChange}
            value={this.state.content} />
          <label> Story Link </label>
          <input
            type="text"
            name="story_url"
            onChange={this.handleChange}
            value={this.state.story_url} />
             <label> Image Link </label>
          <input
            type="text"
            name="img_url"
            onChange={this.handleChange}
            value={this.state.img_url} />
          <input type="submit" value="Create Story" />
        </form>
      </div>
    );
  }
}

export default CreateAuthor;