const initialData = {
    itemslist : ['iphone', 'OnePlus', 'Sumsung']
}
function itemsReducer(state = initialData, action) {
    switch(action.type) {
        case 'ADD_ITEM' : return {
            ...state,
            itemslist:[...state.itemslist,'new item']
        }
    }
    return state
}
export default itemsReducer