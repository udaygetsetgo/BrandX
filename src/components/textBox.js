// basic react component starting template
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

class Txtbox extends Component {
    render() {
		 const Input = styled.input.attrs({
			  type: 'text'
			})`
			  background: white;
			  border-radius: 3px;
			  border: 1px solid gray;
			  color: black;
			  padding: 5px;
			  width: 100%
			`;
			const Box = styled.div`
			  padding: 1em 1em 1em;
			  text-align:left;
			`;
		return (
		  <div className='col-lg-12'>
		    <Box className="row">
		    	<label>{this.props.title}</label>
		    	<Input defaultValue={this.props.value}/>
		    </Box>
		  </div>
		);
    }
}

export default Txtbox;
