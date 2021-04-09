import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './SideDrawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer=(props)=>{
    let attachedClasses=[Classes.SideDrawer,Classes.Close];

    if(props.open){
        attachedClasses=[Classes.SideDrawer,Classes.Open]; 
    }

    return  <Aux>
                <BackDrop clicked={props.closed} show={props.open} />
                <div className={attachedClasses.join(' ')} onClick={props.closed}>
                    <div className={Classes.Logo}>
                        <Logo/>
                    </div>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </div>
            </Aux>

};

export default sideDrawer;