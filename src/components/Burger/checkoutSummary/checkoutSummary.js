import React from 'react';
import Burger from '../Burger';
import Classes from './checkoutSummary.module.css';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props)=>{
    return(
        <div className={Classes.checkoutSummary}>
            <h1>WE HOPE YOU LOVE IT :) :)</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;