import {USER_LOGIN_SUCCESS} from '../actions/users';

export default function (state = null, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
}
