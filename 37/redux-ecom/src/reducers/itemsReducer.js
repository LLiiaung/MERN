const initialData = {
    items : [ {
            itemName:'Realme 5',
            itemImage: 'x',
            itemPrice: '10000'
        }, {
            itemName:'Realme 3',
            itemImage: 'x',
            itemPrice: '12000'
        }, {
            itemName:'Realme 4',
            itemImage: 'x',
            itemPrice: '14000'
        }
    ]
}

function itemsReducer(state = initialData, action) {
    switch(action.type) {
        case 'ADD_ITEM' : return{
            ...state,
            items : [...state.items, action.payload]
        }
    }
    return state
}
export default itemsReducer