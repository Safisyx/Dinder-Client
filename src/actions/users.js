import * as request from 'superagent';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

const baseUrl = 'http://localhost:4001';

export const login = (email, password) => (dispatch) => {

    request
     .post(`${baseUrl}/logins`)
     .send({ email, password })
     .then(result => {
       console.log(result.body);
       dispatch({
         type: USER_LOGIN_SUCCESS,
         payload: result.body
       })
     })
     .catch(err => {
         if (err.status === 400) {
             dispatch({
                 type: USER_LOGIN_FAILED,
                 payload: err.response.body.message || 'Unknown error'
             })
         }
         else {
             console.error(err)
         }
     })
}

export const signup = (name, email, password, description) => (dispatch) => {
  console.log([name, email, password, description]);
	request
		.post(`${baseUrl}/users`)
		.send({name, email, password, description})
		.then(result => {
			dispatch({
				type: USER_SIGNUP_SUCCESS
			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: USER_SIGNUP_FAILED,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
		})
}
