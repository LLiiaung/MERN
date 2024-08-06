const initialData = {
    userslist : ['Ben', 'Bob', 'Alex']
}
function usersReducer(state = initialData, action) {
    switch(action.type) {
        case 'ADD_USER' : return {
            ...state,
            userslist:[...state.userslist,'new user']
        }
    }
    return state
}
export default usersReducer