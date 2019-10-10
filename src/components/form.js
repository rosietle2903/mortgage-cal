import React, { Component }  from 'react';

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loanAmount: '', 
       interestRate: '',
       numOfyears: '',
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
    const finalValue = Number(this.state.loanAmount) + Number(this.state.interestRate); 
    console.log(finalValue); 
    
  }
  
    render() {
      return (
        <form 
        onSubmit={this.handleSubmit}>
          <div>
  
            <label> Loan Amount: </label>
            <input 
            type="number" 
            value={this.state.loanAmount} 
            onChange={this.handleLoanAmount}/>
  
            <label> Interest Rate: </label>
            <input 
            type="number"
            value={this.state.interestRate}
            onChange={this.handeInterestRate} />
  
            <label> Number of years: </label>
            <input 
            type="number"
            value={this.state.numOfyears}
            onChange={this.handleNum} />
          </div>
          <button>Calculate</button>
          <h1> {this.finalValue} </h1>
        </form>
      )
    }
  }
  
  export default Form
  