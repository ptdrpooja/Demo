export const SignInReducer = (state,action)=>{
    switch(action.type){
        case 'UPADATE_SIGN_IN' :
            return{
                userToken: action.payload.userToken
            }
            default:
                return state
    }
}