import React, { Component } from 'react';
import Box from './Box';
import './ColorPanel.css';

class ColorPanel extends Component {
    static defaultProps = {
        numBoxes: 18,
        blueColors: ['#0039a6', '#0076CE', '#1877F2', '#2c3968', '#073980', '#0530ad', '#0071c5', '#004792', '#81D8D0', '#1da1f2', '#1a1f71']
    }
    render() {
        const boxes = Array.from({ length: this.props.numBoxes}).map(() => (
            <Box colors={this.props.blueColors}/>
        ))
        return <div className="BoxContainer">{boxes}</div>
    }
}

export default ColorPanel;