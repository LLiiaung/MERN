const initialData = {

  gamename: 'Football',
  playername:'Messi',
  username:'John'
};

function gamesReducer(state = initialData, action) {
  switch(action.type) {
    case 'CHANGE_GAME_NAME': return{
      ...state,
      gamename : action.payload
    }
    case 'CHANGE_PLAYER_NAME': return{
      ...state,
      playername : action.payload
    }
    case 'CHANGE_USERNAME': return{
      ...state,
      username : action.payload.username
    }
  }
  return state
}

export default gamesReducer