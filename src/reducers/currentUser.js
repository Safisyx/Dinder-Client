import {USER_LOGIN_SUCCESS} from '../actions/users';
import {LIKE_BREED} from '../actions/likeBreed'

export default function (state = null, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      //console.log(action.payload);
      return action.payload;
    case LIKE_BREED:
      //return { state.details.name, state.deta };
    default:
      return state;
  }
}
