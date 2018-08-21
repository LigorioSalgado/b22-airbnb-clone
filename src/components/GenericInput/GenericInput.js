import React, { Component } from 'react'



class GenericInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            type:props.type,
            change:props.change,
            value:props.value,
            name:props.name
        }

    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.value !== this.props.value){
            this.setState(
                {value:this.props.value}
            )
        }

    }
    

    render(){
        return(
            <div className="form-group">
                <label htmlFor={this.state.name}>{this.state.name}</label>
                <input type={this.state.type} value={this.state.value} 
                onChange={this.state.change} name={this.state.name} 
                id={this.state.name} className="form-control"/>
            </div>
        )
    }

}


export default GenericInput;