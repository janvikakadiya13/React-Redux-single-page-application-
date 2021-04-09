import React from 'react';
import Classes from './Input.module.css';

const input =(props)=>{
    
    let inputElement=null;
    const invalidArray=[Classes.InputElement];
    if(props.invalid && props.shouldValidate && props.touched ){
        invalidArray.push(Classes.InputInvalid)
    }
    switch(props.elementType){
        case ('input') :
            inputElement=<input className={invalidArray.join(" ")} 
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value}
             />
            break;
        case ('textarea') :
            inputElement=<textarea className={invalidArray.join(" ")} 
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value}
                />
            break; 
         case ('select') :
             inputElement=(<select className={invalidArray.join(" ")} 
                onChange={props.changed}
                value={props.value} >
                     {props.elementConfig.options.map(option=>
                     <option key={option.value} value={option.value}>{option.displayValue}</option>
                     )}
                </select>)
             break; 

        default:
            inputElement=<input className={invalidArray.join(" ")}
                onChange={props.changed}
                value={props.value}
            />       
    }

    return(
        <div className={Classes.Input}>
            <label className={Classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;