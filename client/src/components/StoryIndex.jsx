import React from 'react';

function StoryIndex(props) {
    return (
        <div className="storyindex">
            {props.stories.map(story => {
                return (
                    <div className="story-index" key={story.id}>
                        <img src={story.img_url} alt="Story Poster" />
                        <br />
                        <br />
                        <h1 className="story-title">{story.title}</h1>
                        <br />
                        <h3 className="story-author">By: {story.author}</h3>
                        <br />
                        <button className="myButton"
                            onClick={(ev) => {
                                 ev.preventDefault();
                                props.detail(story)
                            }} >
                            View Story Detail
                        </button>
                        <br />
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default StoryIndex;
