import * as actionTypes from '../actions/actionTypes';

const initialState ={
    ingredients:null,
    totalPrice:0, 
    loading:false,
    error:false,
    building:false
}

const INGREDIENT_PRICE={
    cheese:20,
    salad:10,
    meat:30,
    bacon:5 
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case(actionTypes.ADD_INGREDIENTS):
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] + 1
                    /*ES6 provides a syntax in which we can simply add property by using
                      [] bracket..here we will pass ingrediant name through props*/
                },
                totalPrice:state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
                building:true
            }
        case(actionTypes.REMOVE_INGREDIENTS):
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] - 1
                },
                totalPrice:state.totalPrice - INGREDIENT_PRICE[action.ingredientName],
                building:true
            }
        
        case(actionTypes.SET_INGREDIENTS):
            return{
                ...state,
                ingredients:action.ingredients,
                totalPrice:0,
                error:false ,
                building:false
            }
        case(actionTypes.FETCH_INGREDIENTS_FAILED):
            return{
                ...state,
                error:true
            }
        default:
            return state;
    }
};

export default reducer;