import React, { Component }  from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import Form from './Form.js'
import { parenthesizedExpression } from '@babel/types';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                datasets: [{
                    data: [this.props.chartData], 
                    backgroundColor: [
                         '#ff6384',
                         '#36a2eb',
                         '#ffce56' ]
                }],
                labels: ['Rate']
            }
        }
    }
     
    componentDidUpdate(previousProps){
        if (this.props.chartData !== previousProps.chartData) { //previousProp = current value for chart, this.props.chartData = new value
        this.setState({
            chartData: {
                datasets: [{
                    data: [this.props.chartData], 
                    backgroundColor: [
                        //  '#ff6384',
                        //  '#36a2eb',
                        //  '#ffce56' 
                        '#ff6384']
                }],
                labels: ['Rate']
            }
        })
    }
      }; 
    
    render() {
        return (
            <div>
                <Doughnut
                    data={this.state.chartData} 
                    options={{
                        maintainAspectRatio: true
                    }}/>
                
            </div>
        )
    }
}

export default Chart;