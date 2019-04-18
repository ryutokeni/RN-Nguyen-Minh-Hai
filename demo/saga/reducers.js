import REQUEST from './actionType';
import request from './actions';
const initialState = {
}
function MainReducer(state = initialState, action){
    switch(action.type){
      case REQUEST:
        return {
            data: action.data
        }
      default:
        return state
    }
  }
  
  export default MainReducer