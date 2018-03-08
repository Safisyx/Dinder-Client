import {CHANGE_PICTURE} from '../actions/changePicture'
import {LIKE_BREED} from '../actions/likeBreed'
export default function (state = {}, action) {
    switch (action.type) {
      case CHANGE_PICTURE:
        //console.log(action);
        //console.log(action.payload);
        const image = action.payload.message
        let toArray = image.split('/')
        let nameWithSub = toArray[toArray.length-2]
        let splitSub = nameWithSub.split('-')
        const name = (splitSub.length===2)? splitSub[1]+' '+splitSub[0] : splitSub[0]
        //console.log(name);
        return {
          image,
          name
        }
       case LIKE_BREED:
         return state
      default:
        return state
    }
}
