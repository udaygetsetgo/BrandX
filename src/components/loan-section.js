// basic react component starting template
import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import Txtbox from './textBox.js'
import ProgresBar from './progressBar.js';
import FontAwesome from 'react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from 'react-fontawesome';
import { faHome, faCoffee } from '@fortawesome/fontawesome-free-solid';

class LoanSection extends Component {
    render() {
    	const Box = styled.div`
			  padding: 1em 1em 1em;
			  text-align:left;
			`;
		const Label = styled.label`
			  font-weight: 700;
			  text-align:center;
			  text-align:-webkit-center;
			  padding-bottom: 1em;
			`;
		return (
		  <div className="loanSection">
      	<Box>
          <Label ><span> <FontAwesomeIcon name={this.props.data.icon}/></span>{this.props.data.title}</Label>
		  		<Txtbox title={this.props.data.textboxTitle} value={this.props.data.amount}/>
		  		<ProgresBar title={this.props.data.coverageTitle} value={this.props.data.coverageValue}/>
		  	</Box>
		  </div>
		);
    }
}

export default LoanSection;
