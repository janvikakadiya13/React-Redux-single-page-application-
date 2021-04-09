import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Classes from './NavigatiomItems.module.css';

const navigationItems=(props)=>(
    <ul className={Classes.NavigationItems}>
        <NavigationItem link="/" exact >MyBurger</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem>:null}
       {!props.isAuthenticated ? <NavigationItem link="/auth">Authentication</NavigationItem>
                              :<NavigationItem link="/logout">Log-Out</NavigationItem>}
    </ul>
);

export default navigationItems;