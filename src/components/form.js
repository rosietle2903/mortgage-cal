import React, { Component }  from 'react';
import './App.css'; 
import { directive } from '@babel/types';
import {Bar} from 'react-chartjs-2';
import Chart from '/Users/rosiele/Documents/mortage-cal/src/components/Chart.js'


class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loanAmount: '', 
       interestRate: '',
       numOfyears: '',
       finalValue: '', 
    }
  }
  
  handleLoanAmount = (e) => {
   this.setState({
     loanAmount: e.target.value, 
   })
  }
  handeInterestRate = (e) => {
    this.setState({
      interestRate: e.target.value,
    })
  }
  
  handleNum = (e) => {
   this.setState({
     numOfyears: e.target.value,
   })
  }

 handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      finalValue: Number(this.state.loanAmount) + Number(this.state.interestRate),
    })
  }
  
    render() {
      return (
        <form 
        onSubmit={this.handleSubmit}>
          <div>
  
            <label> Rate: </label>
            <input 
            type="number" 
            value={this.state.loanAmount} 
            onChange={this.handleLoanAmount}/>
  
            <label> Period: </label>
            <input 
            type="number"
            value={this.state.interestRate}
            onChange={this.handeInterestRate} />
  
            <label> Present Value: </label>
            <input 
            type="number"
            value={this.state.numOfyears}
            onChange={this.handleNum} />
          </div>
          <button>Calculate</button>
          <Chart data={this.state.finalValue}/> 
          <h1>
            {this.state.finalValue}
          </h1>
        </form>
      )
    }
  }
  
  export default Form
  