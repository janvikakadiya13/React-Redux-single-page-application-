import React from 'react';
import Classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';


const burger=(props)=>{

    let transformedIngredients = Object.keys(props.ingredients).map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient key={igkey +i} type={igkey}/>}
        )
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[])
    
     
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Add ingredients :) !!!</p>
    }

    return(
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>  
    );

};

export default burger;