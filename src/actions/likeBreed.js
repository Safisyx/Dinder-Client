import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const LIKE_BREED = 'LIKE_BREED'


export const likeBreed = (name,id) => (dispatch) => {
  console.log(name,id);
  request
    .post(`${baseUrl}/breeds`)
    .send({type: name})
    .then(response => {
      //console.log(response);
      request
        .put(`${baseUrl}/users/${id}`)
        .send({preferredbreed: `${name}`})
        .then(res => dispatch({
          type: LIKE_BREED,
          //payload: res.body
        }))
    })
    .catch(err => alert(err))
}
