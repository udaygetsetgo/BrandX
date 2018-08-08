import React, { Component } from 'react';
import '../App.css';

import { connect } from 'react-redux';
import { defaultFunction } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoanToProtect from './loanToProtect.js'
import CheckBox from './checkBox.js'
import styled, { css } from 'styled-components'
import QuoteTabs from './tabs.js'

class Quotes extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    const initialJson = [{
      'title': 'Home Loans',
      'textboxTitle': 'Debt Amount',
      'amount': '$50,000',
      'coverageTitle': '% of Coverage',
      'coverageValue': '25',
      'icon':'home'
    },
    {
      'title': 'Personal Loans',
      'textboxTitle': 'Debt Amount',
      'amount': '$30,000',
      'coverageTitle': '% of Coverage',
      'coverageValue': '55',
      'icon':'user'
    },
    {
      'title': 'Credit Cards',
      'textboxTitle': 'Debt Amount',
      'amount': '$40,000',
      'coverageTitle': '% of Coverage',
      'coverageValue': '75',
      'icon':'credit-card'
    },
    {'totalProtection': '$120,000'}
    ];
    const checkTitle = [
        'Job Loss',
        'Injury/ Sickness',
        'Critical Illness',
        'Death'
      ];
    const BoxQuote = styled.div`
        margin: 1em 1em 2em;
        text-align:left;
        background: #117a8b;
        border-radius: 10px;
        border: 1px solid gray;
        color: white;
        height:100%;
        width:100%;
      `;
    const Label = styled.label`
        font-weight: 700;
        text-align:center;
        text-align:-webkit-center;
        font-size: 1.1em;
      `;
      const Box = styled.div`
        padding: 1em 1em 1em;
        text-align:left;
        width:90%;
        margin:auto;
      `;

      const Button =styled.button`
          align:center;
          background-color:orange;
          border-color:chocolate;
          color: white;
          height: 30px;
          font-weight: bold;
      `;
      const policies = [
        {
          'totalPremium' : '100',
          'homeLoan':'40',
          'personalLoan':'20',
          'creditCards':'40',
          'jobLoss':'400',
          'injury':'200',
          'illness':'400',
          'death':'1400'
        },
        {
          'totalPremium' : '200',
          'homeLoan':'80',
          'personalLoan':'40',
          'creditCards':'80',
          'jobLoss':'800',
          'injury':'400',
          'illness':'800',
          'death':'2800'
        },
        {
          'totalPremium' : '500',
          'homeLoan':'200',
          'personalLoan':'100',
          'creditCards':'200',
          'jobLoss':'2000',
          'injury':'1000',
          'illness':'2000',
          'death':'7000'
        },
        {
          'totalPremium' : '5000',
          'homeLoan':'2000',
          'personalLoan':'1000',
          'creditCards':'2000',
          'jobLoss':'20000',
          'injury':'10000',
          'illness':'20000',
          'death':'70000'
        }
      ]
    return (
      <Box>
        <div className="quoteBanner"><h5>Get Quote</h5>Customize your quote dynamically by changing the coverage % you are preferable with, adding and removing covers you would like to have. </div>
        <div className="row policy">
        <div className='col-lg-8 col-md-12'>
            <div className="row">
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                  <Label>Loans To Protect</Label>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                  <Label>Total Protection: {initialJson[3].totalProtection}</Label>
                </div>
              </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <LoanToProtect data={initialJson}/>
            </div>
          </div>
          <hr />
          <div>
            <Label>What covers would you like</Label>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <CheckBox data={checkTitle[0]}/>
            </div>
            <div className="col-lg-6 col-md-6">
              <CheckBox data={checkTitle[1]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <CheckBox data={checkTitle[2]}/>
            </div>
            <div className="col-lg-6 col-md-6">
              <CheckBox data={checkTitle[3]}/>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <BoxQuote>
          <h4> Quote</h4>
          <QuoteTabs policies={policies}></QuoteTabs>
          <div className='text-center '><Button primary>Get Policy</Button></div>
          </BoxQuote>
        </div>
       </div>
      </Box>
    )
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(Quotes);
