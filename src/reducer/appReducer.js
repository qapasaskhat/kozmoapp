import initialState from '../redux/initialState'

export const appReducer = (state = initialState.app, action)=>{
    switch(action.type){
        case 'VIEW_WORKOUT':
            return{
                ...state,
                workoutView: action.payload
            }
        default:
            return state
    }
}