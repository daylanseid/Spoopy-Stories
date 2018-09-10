const BASE_URL = process.env.REACT_APP_API_URL


//GET ALL STORIES
function getStories() {
    return fetch(BASE_URL + '/stories')
    .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
}


//GET ALL COMMENTS BASED ON STORY ID- ID undefined
function getComments(story_id) {
    return fetch(BASE_URL + `/stories/${story_id}/comments`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
      });
}



//SHOW A STORY
function getOneStory(id) {
    return fetch(BASE_URL + `/stories/${id}`)
    .then(resp => resp.json())
    .catch(err => {
      console.log(err);
      throw Error(err);
    });
  };



//CREATE A STORY
function saveStory(story) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(story),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(BASE_URL + `/stories`, opts)
      .then(resp => resp.json());
  };

//CREATE A COMMENT

export function saveComment(comment,story_id) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(BASE_URL + `/stories/${story_id}/comments`, opts)
      .then(resp => resp.json());
  };


//UPDATE/EDIT A STORY
function updateStory(story) {
    const opts = {
      method: 'PUT',
      body: JSON.stringify(story),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(BASE_URL + `/stories/${story.id}`, opts)
      .then(resp => resp.json());
  };

//UPDATE/EDIT A COMMENT


//DELETE A STORY


//DELETE A COMMENT



export {
    getStories,
    getComments,
    getOneStory,
    saveStory,
    updateStory
};