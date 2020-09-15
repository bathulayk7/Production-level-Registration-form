import React, { Component } from 'react'
import {Form,FormGroup,FormFeedback,Label,Input,Button} from "reactstrap"
import {isEmail} from "validator"

class Register extends Component {
    constructor(props){
        super(props)
        this.state=this.getInitialState();
    }
    getInitialState=()=>({
            data:{
                firstname:"",
                lastname:"",
                email:"",
                password:"",
                confirmPassword:"",
            },
            errors:{}
    })
    handleChange=(e)=>{
        // e.preventDefault();
        this.setState({
            data:{...this.state.data, [e.target.name]:e.target.value },
            errors:{...this.state.errors, [e.target.name]:"" }
        })
    }
    
    validate=()=>{
        const {data}=this.state;
        let errors={};
 
        if(data.firstname==="")errors.firstname="First name can't be blank.";
        if(data.lastname==="")errors.lastname="Last name can't be blank.";
        if( !isEmail(data.email))errors.email="Email  must be valid.";
        if(data.email==="")errors.email="Email can't be blank.";
        if(data.password==="")errors.password="Password can't be blank.";
        if(data.password!==data.confirmPassword)errors.confirmPassword="Passwords must be matched.";
 
        return errors;
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {data}=this.state;
        const errors= this.validate()
        if(Object.keys(errors).length===0){
            //Call an API here
            console.log(data); 
            this.setState(this.getInitialState())
        }else{
            this.setState({errors})
        }
    }
    
    render() {
        const {data,errors}=this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="firstname">FirstName</Label>
                    <Input id="firstname" name="firstname" value={data.firstname} invalid={errors.firstname?true:false} onChange={this.handleChange} ></Input>
                    <FormFeedback>{errors.firstname}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">LastName</Label>
                    <Input id="lastname" name="lastname" value={data.lastname}invalid={errors.lastname?true:false} onChange={this.handleChange} ></Input>
                    <FormFeedback>{errors.lastname}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" name="email" value={data.email} invalid={errors.email?true:false} onChange={this.handleChange} ></Input>
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" id="password" name="password" value={data.password} invalid={errors.password?true:false} onChange={this.handleChange} ></Input>
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input type="password" id="confirmPassword" name="confirmPassword" value={data.confirmPassword} invalid={errors.confirmPassword?true:false} onChange={this.handleChange} ></Input>
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                </FormGroup>
                <Button color="primary">Register</Button>
            </Form>
        )
    }
}

export default Register
