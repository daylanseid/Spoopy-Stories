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


// Changes state based on user input into form
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
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


 render() {
    return (
      <div className="edit-story">
              <p >Edit Story</p>     
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Title"
                  />
                  <br />
                  <label>Author:</label>
                  <input
                    type="text"
                    name="author"
                    value={this.state.creator}
                    onChange={this.handleChange}
                    placeholder="Author"
                  />
                  <br />
                  <label>Genre:</label><select
                    name="genre"
                    onChange={this.handleChange}
                    required="required">
                    <option value={this.state.genre} disabled selected hidden>{this.state.genre}</option>
                    <option value="Horror">Intruder</option>
                    <option value="Comedy">Outdoors</option>
                  </select>
                  <br />
                  <label>Content:</label>
                  <input
                    type="text"
                    name="Content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="Content"
                  />
                  <br />
                  <label>Img Url:</label>
                  <input
                    type="text"
                    name="img_url"
                    value={this.state.img_url}
                    onChange={this.handleChange}
                    placeholder="Img Url"
                  />
                  <br />
                  <label>Story Link:</label>
                  <input
                    type="text"
                    name="story_url"
                    value={this.state.story_url}
                    onChange={this.handleChange}
                    placeholder="Story Link"
                  />
                  <br />
                  <br />
                  <br />
                  <input type="submit" value="Edit Story" />
                </form>
              </div>       
      </div >
    );
}
}
 export default EditStory; 