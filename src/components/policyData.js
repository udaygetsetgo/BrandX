// basic react component starting template
import React, { Component } from 'react';
import styled, { css } from 'styled-components'

class PolicyData extends Component {
    render() {

		return (
		  <div className='col-lg-12 policyData'>
        <h5 className='text-right'> Total Premium : ${this.props.totalPremium}</h5>
        <br/>
        <h5  className='text-right'> Home Loans : ${this.props.homeLoan}</h5>
        <h5  className='text-right'> Personal Loans : ${this.props.personalLoan}</h5>
        <h5 className='text-right'> Credit Cards: ${this.props.creditCards}</h5>
        <hr/>
        <h5 className='text-right'> Job Loss Cover : ${this.props.jobLoss}</h5>
        <h5 className='text-right'> Injury/Sickness Cover : ${this.props.injury}</h5>
        <h5 className='text-right'> Critical Illness Cover : ${this.props.illness}</h5>
        <h5 className='text-right'> Life Cover : ${this.props.death}</h5>
        <br/>
		  </div>
		);
    }
}

export default PolicyData;
