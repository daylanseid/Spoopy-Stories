const BASE_URL = process.env.REACT_APP_API_URL

//function getStories() {
//    return fetch(BASE_URL + '/stories')
//    .then(resp => resp.json())
//}


export function getStories() {
    return fetch(BASE_URL + '/stories')
    .then(resp => resp.json())
      .catch(err => {
        throw Error(err);
      });
};



function getComments(id) {
    return fetch(BASE_URL + `/stories/${id}/comments`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
      })
}


export {
    //getStories,
    getComments
};