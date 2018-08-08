// basic react component starting template
import React, { Component } from 'react';
import CheckBox from './checkBox.js'
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Tabs, Tab } from 'react-bootstrap';


class PolicyTabContent3 extends Component {
    render() {

      const tableData  = [
            {
              columns: [
                {
                  Header: "Loan #",
                  accessor: `<label htmlFor="" className="form-control" value="1" />`
                },
                {
                  Header: "Account Number",
                  accessor: `<input type="text" className="form-control" />`
                },
                {
                  Header: "Lender",
                  accessor: `<input type="text" className="form-control" />`
                },
                {
                  Header: "Loan Amount",
                  accessor: `<input type="text" className="form-control" />`
                },
                {
                  Header: "Action",
                  accessor: `<input type="text" className="form-control" />`
                }

              ]
            },

          ]
		return (
		  <div className="row policyContent">
        <div className="col-lg-12  col-md-12 col-sm-12  col-xs-12 ">
          <h5>{`Please enter your Loan and Cover Details`}</h5><hr/>
            <h5>Loan Details</h5>
            <Tabs defaultActiveKey={1} animation={false} id="loanNavBar" className = 'loan'>
                <Tab eventKey={1} title="Home Loan">
                  <form>
                   <div className="padding">
                    <div className="row">
                      <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                        <label htmlFor="">Total </label>
                        <input type="text" className="form-control" disabled={true} value="$1000,000.00" />
                      </div>
                      <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                        <label htmlFor="">Number of Loans </label>
                        <input type="number" className="form-control" value="2" />
                      </div>
                    </div>
                  </div>
                  </form>
                  <form>

                    <ReactTable columns = {tableData}  defaultPageSize={1}  className="-striped -highlight" showPagination={false} minRows= {0}/>
                  </form>
                </Tab>
                <Tab eventKey={2} title="Personal Loan">
                  <h5>Personal Loan Deails</h5>
                </Tab>
                <Tab eventKey={3} title="Credit Card" >
                  <h5>Credit Card Deails</h5>
                </Tab>
            </Tabs>

            <h5>Cover Details</h5>
            <div>
              <div className="row">
                  <div>
                    <CheckBox data={'Job Loss.'}/>
                    <label htmlFor="" className="cover-label">Provides a monthly benefit where policy owner is involuntarily unemployed</label>
                  </div>
              </div>
              <div className="row">
                  <div>
                    <CheckBox data={'Critical Illness.'}/>
                    <label htmlFor="" className="cover-label">Provides 12 months disability benefits as a lump sum</label>
                  </div>
              </div>
              <div className="row">
                  <div>
                    <CheckBox data={'Injury Sickness.'}/>
                    <label htmlFor="" className="cover-label">Provides a monthly benefit where a customer betters a disability from illness and injury</label>
                  </div>
              </div>
              <div className="row">
                  <div>
                    <CheckBox data={'Death'}/>
                    <label htmlFor="" className="cover-label">Lump Sum benefit for the life insured person</label>
                  </div>
              </div>
            </div>

            <h5>Quote Details</h5>
        </div>
      </div>
		);
    }
}

export default PolicyTabContent3;
