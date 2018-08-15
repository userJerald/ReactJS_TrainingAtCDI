import React, { Component } from 'react';
import './index.css';

class Calculator extends Component {
    render() {
        return (
            <div style={{padding: '30px'}}>
                <div className='calcu'>
                    <div className='screen'>
                    0
                        <div className='buttons'>
                            <div className='numbers'>
                            </div>
                            <div className='operations'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;