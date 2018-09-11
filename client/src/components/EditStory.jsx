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
    this.toggle = this.toggle.bind(this);
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


  // Toggles Modal
  toggle(e) {
    e.preventDefault();
    this.props.toggle('editModal');
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
    this.props.toggle('editModal');
  }

  // Handles if the delete button is clicked to delete the podcast
  delete(e) {
    e.preventDefault();
    this.props.delete(this.state.id)
    this.props.toggle('editModal');
  }

  // Changes state based on user input into form
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }
// Renders Modal to edit a podcast (using Bulma)
render() {
    return (
      <div>
        <div className={this.props.active}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Edit Story</p>
              <button onClick={this.toggle} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
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
                    value={this.state.author}
                    onChange={this.handleChange}
                    placeholder="Author"
                  />
                  <br />
                  <label>Genre:</label><select
                    name="genre"
                    onChange={this.handleChange}
                    required="required">
                    <option value={this.state.genre} disabled selected hidden>{this.state.genre}</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Political">Political</option>
                    <option value="Gaming">Gaming</option>
                    <option value="True Crime">True Crime</option>
                    <option value="General">General</option>
                  </select>
                  <br />
                  <label>Content:</label>
                  <textarea
                    className='textarea'
                    id="genreText"
                    rows='2'
                    type="text"
                    name="content"
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
                    placeholder="Image Url"
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
                  <footer className="modal-card-foot">
                    <button type="submit" value="Edit Podcast" className="button is-success">Save changes</button>
                    <button onClick={this.toggle} className="button">Cancel</button>
                    <button onClick={this.delete} className="button is-danger">Delete Story</button>
                  </footer>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div >
    );
  }
}

export default EditStory;