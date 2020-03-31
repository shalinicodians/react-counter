import React, { Component } from 'react';
import Total from "./total";
import App from './../App';
class Counter extends Component {
    state = { 
        count:0,
        display:'block',
        total:0
     }
     handleIncrement=()=>{
         this.setState({count:this.state.count+1})
     }
     handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handleDelete=()=>{
        this.setState({display:'none'});
        this.setState({count:0});
    }
    // totalAmount=()=>{
    //     console.log('jshd')
    // }
    
    render() { 
        
        return (
        <div style={{display:this.state.display}}>
            <Total tot={this.formatCount()}/>
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>&nbsp;&nbsp;&nbsp;
            <button onClick={this.handleIncrement} className="btn btn-success">Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={this.handleDecrement} className="btn btn-primary">Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>
        


        </div> 
        );
    }
    getBadgeClass() {
        let classes = "badge badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {count}=this.state
        return count===0?'Zero':count
    }
}
 
export default Counter;