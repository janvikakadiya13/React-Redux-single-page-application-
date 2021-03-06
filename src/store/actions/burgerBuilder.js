import * as actionType from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = (name)=>{
    return {
        type :actionType.ADD_INGREDIENTS,
        ingredientName : name
    };
};

export const removeIngredient = (name)=>{
    return {
        type :actionType.REMOVE_INGREDIENTS,
        ingredientName : name
    };
};

export const setIngredients = (ingredients)=>{
    return {
        type:actionType.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed=()=>{
    return { 
        type:actionType.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients=()=>{
    return dispatch =>{
        axios.get('https://react-burger-builder-a2e75.firebaseio.com/Ingredients.json')
        .then(response=>{dispatch(setIngredients(response.data))})
         .catch(error=>{dispatch(fetchIngredientsFailed())})
    };
};