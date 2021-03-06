import { RECEIVE_RESPONSE, REMOVE_RESPONSE } from "../actions/responses_actions";


const ResponsesReducer = (state={}, action) =>  {
    Object.freeze(state); 

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RESPONSE:
            
            return Object.assign({}, action.response)
        case REMOVE_RESPONSE: 
            let responseId = action.response._id
            delete newState[responseId]
            return newState
        default:
            return state;
    }
}

export default ResponsesReducer; 