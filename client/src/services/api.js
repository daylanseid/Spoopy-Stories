const BASE_URL = process.env.REACT_APP_API_URL


//GET ALL STORIES
function getStories() {
    return fetch(BASE_URL + '/stories')
    .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
}


//GET ALL COMMENTS based on story id
function getComments(id) {
    return fetch(BASE_URL + `/stories/${id}/comments`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
      });
}


//SHOW A STORY
function getOneStory(id) {
    //console.log(id);
    //debugger
    return fetch(BASE_URL + `/stories/${id}`)   
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
  };



//CREATE A STORY
//Data comes in as nested information under data and attributes. Must also use spread
function saveStory(story) {
    //debugger
    //console.log(story);
    const opts = {
      method: 'POST',
      body: JSON.stringify({ "data": { "attributes": { ...story } } }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(BASE_URL + `/stories`, opts)
      .then(resp => resp.json());
  };

//CREATE A COMMENT
 function saveComment(comment,story_id) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(BASE_URL + `/stories/${comment.story_id}/comments`, opts)
      .then(resp => resp.json());
  };


//UPDATE/EDIT A STORY
function updateStory(story,id) {
    const opts = {
      method: 'PUT',
      body: JSON.stringify(story.id),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(BASE_URL + `/stories/${story.id}`, opts)
      .then(resp => resp.json());
  };

//UPDATE/EDIT A COMMENT


//DELETE A STORY
 function deleteStory(story_id) {
    const opts ={
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${BASE_URL}/stories/${story_id}`, opts)
    .then(resp => "deleted")
    .catch(err => {
      throw Error(err);
    })
  };


//DELETE A COMMENT



export {
    getStories,
    getComments,
    getOneStory,
    saveStory,
    updateStory,
    saveComment,
    deleteStory
};