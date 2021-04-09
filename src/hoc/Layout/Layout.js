import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aux from '../Auxiliary/Auxiliary';
import Classes from './Layout.module.css';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSidedrawer:false
    }
    sideDrawerClosedHandler=()=>(
        this.setState({showSidedrawer:false})
    );

    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return {showSidedrawer:! prevState.showSidedrawer}
        })
    }
    render(){
        return(
            <Aux>
                 <ToolBar isAuth={this.props.isAuthenticated} 
                          sideDrawerToggle={this.sideDrawerToggleHandler}/>
                 <SideDrawer isAuth={this.props.isAuthenticated}
                             open={this.state.showSidedrawer}
                             closed={this.sideDrawerClosedHandler}
                 />
                 <main className={Classes.Content}>
                    {this.props.children}
                 </main>
            </Aux>
        );
    }
}

const mapStateToProps=state=>{
    return {
        isAuthenticated:state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);