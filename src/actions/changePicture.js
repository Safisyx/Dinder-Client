import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const CHANGE_PICTURE = 'CHANGE_PICTURE'


export const changePicture = () => (dispatch) => {
  request
    .get(`https://dog.ceo/api/breeds/image/random`)
    .then(response => dispatch({
      type: CHANGE_PICTURE,
      payload: response.body
    }))
    .catch(err => alert(err))
}
