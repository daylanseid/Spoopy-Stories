import React, { Component } from 'react';

class CreateStory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      genre:'',
      content:'',
      img_url: 'https://static.thenounproject.com/png/187803-200.png',
      story_url:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
        title: '',
        author: '',
        genre: '',
        content: '',
        story_url: '',
        img_url: 'https://static.thenounproject.com/png/187803-200.png'
      })
  }

  //changes state based on user input
  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  //renders a styled form for user to input their information
  render() {
    return (
      <div  className="create-story">
        <h2>Create Story</h2>
        <form onSubmit={this.handleSubmit}>

          <div className="row">
          <div className="col-25">
          <label> Title </label>
          </div>
          <div className="col-75">
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title} 
            placeholder="Title"/>
          </div>
          </div>

          <div className="row">
          <div className="col-25">
          <label> Author </label>
          </div>
          <div className="col-75">
          <input
            type="text"
            name="author"
            onChange={this.handleChange}
            value={this.state.author} 
            placeholder="Author"/>
          </div>
          </div>

          <div className="row">
          <div className="col-25">
          <label> Genre </label>
          </div>
          <div className="col-75">
          <input
            type="text"
            name="genre"
            onChange={this.handleChange}
            value={this.state.genre} 
            placeholder="Genre"/>
           </div>
          </div>

          <div className="row">
          <div className="col-25">
          <label> Content </label>
          </div>
          <div className="col-75">
          <textarea
            type="text"
            name="content"
            onChange={this.handleChange}
            value={this.state.content} 
            placeholder="Write Story Here.."
            />
            </div>
          </div>
          
           <div className="row">
          <div className="col-25">
          <label> Story Link </label>
          </div>
          <div className="col-75">
          <input
            type="text"
            name="story_url"
            onChange={this.handleChange}
            value={this.state.story_url} 
            placeholder="Link to Story"/>
             </div>
          </div>

          <div className="row">
          <div className="col-25">
          <label> Image Link </label>
          </div>
          <div className="col-75">
          <input
            type="text"
            name="img_url"
            onChange={this.handleChange}
            value={this.state.img_url}
            placeholder="Link to Story Image" />
              </div>
          </div>
          <div className="row">
          <input type="submit" value="Create Story" />
          </div>
        </form>
      </div>     
    );
  }
}

export default CreateStory;