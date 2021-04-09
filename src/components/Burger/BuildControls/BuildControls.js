import React from 'react';
import Classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:"Cheese",type:"cheese"},
    {label:"Salad",type:"salad"},
    {label:"Meat",type:"meat"},
    {label:"Bacon",type:"bacon"}
]

const buildControls=(props)=>(
    <div className={Classes.BuildControls}>
        
        <p>Burger Price:<strong>{props.burgerPrice.toFixed(2)}</strong></p>

        {
            controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}
                added={()=>props.addIngredients(ctrl.type)}
                removed={()=>props.removeIngredients(ctrl.type)}
                disabled={props.disable[ctrl.type]}
            />
        ))}
       <button className={Classes.OrderButton} disabled={!props.purchasable} 
                onClick={props.ordered}>{props.isAuth ?'ORDER NOW!!!':'SIGN UP TO ORDER'}</button>
    </div>
);

export default buildControls;