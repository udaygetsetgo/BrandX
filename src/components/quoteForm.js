// basic react component starting template
import React, { Component } from 'react';
import CheckBox from './checkBox.js'

class QuoteForm extends Component {
    render() {
		return (
		  <div className="row center-block">
              <div className="inner-triangle hidden-sm hidden-xs"></div>
              <div className="col-lg-3  col-md-2 "></div>
               <div className="col-lg-6 col-lg-offset-3  col-md-8 col-md-offset-2  col-sm-12  col-xs-12 ">
                  <h3>Quote Calculator</h3>
                  <form>
                        <div className="form-group">
                          <label htmlFor="workingAs">I am working as </label>
                          <input type="email" className="form-control" id="workingAsId"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="homeLoan">My Home Loan is </label>
                          <input type="number" className="form-control" id="homeLoanId" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="personalLoan">My Personal Loan is </label>
                          <input type="number" className="form-control" id="personalLoanId" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="creditCard">My Credit Card Outstanding is </label>
                          <input type="number" className="form-control" id="creditCardOutstandingId" />
                        </div>
                        <div><CheckBox data={'I am living in Australia and my age is less than 60.'}/></div>
                        <div >
                        <button type="submit" className="btn btn-info">Get Quote</button></div>
                  </form>
               </div>
            </div>
		);
    }
}

export default QuoteForm;
