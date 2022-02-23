import React, { Component } from "react";
import Input from "./components/input";
import Button from "./components/button";


class Form extends Component {
    
     state = {
         title: 'Registration form',
          name: '',
          password: '',
          inform:''
     };
      
    handleChange(event, field) {
      this.setState({[field]: event.target.value});
    }
  
    handleSubmit(event) {
    event.preventDefault();
    if(!this.state.name && !this.state.password ){
        this.setState({inform: "Поля не заполнены"});
    } else if (!this.state.name) {
       this.setState({inform: "Поле UserName не заполнено"});
    } else if (!this.state.password){
     this.setState({inform: "Поле Password не заполнено"});
    }
    else{
      console.log('username: ' + this.state.name + ', password: ' + this.state.password);
      this.setState({inform: ""});
    }}
  
  

    render() {
        return (
            <>
            <div className="formRegistration">
                <h1>{this.state.title}</h1>
                <form  onSubmit={this.handleSubmit}>
                <Input type="text" value={this.state.name} onChange={(event) => this.handleChange(event, 'name')} title={"User Name"} placeholder={"Enter User Name"}/>
                <Input type="text"value={this.state.password} onChange={(event) => this.handleChange(event, 'password')} title={"User password"} placeholder={"Enter password"}/>
                </form>
                <div className="formGroup">
                <Button onClick={(event )=> this.handleSubmit(event)} title={"Submit"} type = 'submit'/>
                <p >{this.state.inform}</p>
                </div>
                </div>
            </>
        )
    }
}

export default Form;





