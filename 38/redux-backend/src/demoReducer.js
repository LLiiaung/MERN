import axios from 'axios'
const initialState = {
    posts:[]
}
const demoReducer = (state = initialState, action) =>{
    switch(action.type) {
        case 'GET_DATA' : return {
            ...state,
            posts:action.payload
        }
        default : return state
    }
}
export default demoReducer