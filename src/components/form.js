import React, { Component }  from 'react';
import './App.css'; 
import { directive } from '@babel/types';
import {Bar, Doughnut} from 'react-chartjs-2';
import Chart from '/Users/rosiele/Documents/mortage-cal/src/components/Chart.js'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

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
          <h3>Mortgage Calculator</h3>
            <label> Mortgage Amount: </label>
            <input 
            class="input is-success is-small"
            type="number" 
            value={this.state.loanAmount} 
            onChange={this.handleLoanAmount}/>
  
            <label> Interest rate (%): </label>
            <input 
            class="input is-success is-small"
            type="number"
            value={this.state.interestRate}
            onChange={this.handeInterestRate} />
  
            <label> Mortgage period (years) </label>
            <input 
            class="input is-success is-small"
            type="number"
            value={this.state.numOfyears}
            onChange={this.handleNum} />
          </div>
          <FinalValueComponent mortgageValue={this.state.finalValue}/>
          <Chart chartData={this.state.finalValue} />
          <Button color="success"> Calculate </Button>
          
        </form>
      )
    }
  }

  class FinalValueComponent extends Component { //this comonent renders the final value, it takes in a prop as paramenter
    render() {
      return <h1>Your total value: {this.props.mortgageValue}</h1>;
    }
  }

  
  
  export default Form; 

