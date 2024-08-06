const initialData = {
  cartcount: 0
}

function cartReducer(state = initialData, action) {

  switch(action.type) {
    case 'ADD_ITEM': return{
      cartcount: ++state.cartcount
    }
    case 'REMOVE_ITEM': return{
      cartcount: --state.cartcount

    }
    default: {
      return state
    }
  }

 


}

export default cartReducer