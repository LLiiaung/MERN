const initialData = {
    tasklist : ['Learn React', 'Learn Angular', 'Learn JS']
}
function taskReducer(state = initialData, action) {
    switch(action.type) {
        case 'ADD_TASK' : return {
            ...state,
            tasklist:[...state.tasklist,action.payload]
        }
    }
    return state
}
export default taskReducer