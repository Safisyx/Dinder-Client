import {GET_USERS} from '../actions/users';
import {LIKE_BREED} from '../actions/likeBreed'

export default function (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      console.log(action.payload);
      return action.payload;

    case LIKE_BREED:
      return state.map(user=>{
        if (user.id===action.payload.id)
          return action.payload
        return user
      })

    default:
      return state;
  }
}
