import {GET_USERS} from '../actions/users';

export default function (state = null, action) {
  switch (action.type) {
    case GET_USERS:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
}
