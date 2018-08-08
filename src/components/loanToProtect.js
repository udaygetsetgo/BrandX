// basic react component starting template
import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import LoanSection from './loan-section.js'

class LoanToProtect extends Component {
    render() {
		return (
			<div>
				<div className="row vertical-divider">
			        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
			          <LoanSection data={this.props.data[0]}/>
			        </div>
			        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
			          <LoanSection data={this.props.data[1]}/>
			        </div>
			        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
			          <LoanSection data={this.props.data[2]}/>
			        </div>
			      </div>
			</div>
		);
	}
}

export default LoanToProtect;