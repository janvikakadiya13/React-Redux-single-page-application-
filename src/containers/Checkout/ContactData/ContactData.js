import React,{Component} from 'react';
import {connect} from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import {checkValidity} from '../../../shared/shared'

class ContactData extends Component{
    state={
        orderForm:{
                name:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Enter your name'
                    },
                    value:'',
                    validation:{
                        required:true,
                        minLength:2,
                        maxLength:15
                    },
                    valid:false,
                    touched:false
                },
                street:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Enter your street'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                city:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Enter your city'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                country:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Enter your country'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        placeholder:'Enter your mail'
                    },
                    value:'',
                    validation:{
                        required:true,
                        isEmail: true
                    },
                    valid:false,
                    touched:false
                },
                delivarymethod:{
                    elementType:'select',
                    elementConfig:{
                        options:[
                            {value:'fastest',displayValue:'fastest'},
                            {value:'cheapest',displayValue:'cheapest'}                            
                        ]
                    },
                    value:'fastest',
                    validation:{},
                    valid:true
                } 
            },
            formIsValid:false,
           
        }
    
   
    orderHandler=(event)=>{
        event.preventDefault();
        console.log(this.props.ings);
    
        const formData={};
        for(let formElementIdentifier in this.state.orderForm ){
            formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value
        }
        const order = {
            ingredients:this.props.ings,
            price:this.props.price_ ,
            orderData:formData,
            userId:this.props.userId
        }

        this.props.onOrderBurger(order,this.props.token);
     
    }
    
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid =checkValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched=true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
         
    }
       


    render(){
       const formElementsArray=[]
        for(let key in this.state.orderForm){
            formElementsArray.push(
                {id:key,
                config:this.state.orderForm[key]}
            )}

        let form=(
            <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement=>(
                <Input key={formElement.id}
                       elementType={formElement.config.elementType}
                       elementConfig={formElement.config.elementConfig}
                       value={formElement.value}
                       changed={(event) => this.inputChangedHandler(event, formElement.id)}
                       invalid={!formElement.config.valid}
                       shouldValidate={formElement.config.validation}
                       touched={formElement.config.touched}
                       
                />
            ))}
            <Button disabled={!this.state.formIsValid} btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );

        if(this.props.loading){
            form=<Spinner/>
        }

        return(
            <div className={Classes.ContactData}>
                 <h4>Enter your contact data!</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return {
        ings:state.burgerBuilder.ingredients,
        price_:state.burgerBuilder.totalPrice,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
     }
 }

 const mapDispatchToProps=dispatch=>{
     return {
         onOrderBurger : (orderData,token)=> dispatch(actions.purchaseBurger(orderData,token))
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));