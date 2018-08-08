// basic react component starting template
import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

class ProgresBar extends Component {
    render() {
		const Box = styled.div`
			  padding: 1em 1em 1em;
			  text-align:left;
			`;
		const Label = styled.label`
			  font-weight: 700;
			  text-align:center;
			  text-align:-webkit-center;
			`;
		return (
		  <div>
		  	<Box>
		  		<label>{this.props.title}</label>
		  		<Slider defaultValue={Number(this.props.value)} disabled={true} />
		  		<Label>{this.props.value}%</Label>
		  	</Box>
		  </div>
		);
    }
}

export default ProgresBar;