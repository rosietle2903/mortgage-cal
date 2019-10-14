import React, { Component }  from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import Form from '/Users/rosiele/Documents/mortage-cal/src/components/Form.js'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                datasets: [{
                    data: [45, 25, 20,],
                    backgroundColor: [
                         '#ff6384',
                         '#36a2eb',
                         '#ffce56' ]
                }],
                labels: ['Rate', 'Periods', 'Present Value']
            }
        }
    }
    render() {
        return (
            <div>
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true
                    }}
                    
                
                />
            </div>
        )
    }
}

export default Chart;