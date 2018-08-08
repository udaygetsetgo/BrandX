// basic react component starting template
import React, { Component } from 'react';
import CheckBox from './checkBox.js'
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class PolicyTabContent1 extends Component {
    render() {

      const tableData  = [
            {
              columns: [
                {
                  Header: "AddressType",
                  accessor: `<input type="text" className="form-control" />`
                },
                {

                  Header: "StreetAddress",
                  accessor: `<input type="text" className="form-control" />`
                },
                {
                  Header: "City",
                  accessor: `<input type="text" className="form-control" />`
                },
                {
                  Header: "State",
                  accessor: `<input type="text" className="form-control" />`
                },
                {
                  Header: "PostalCode",
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
          <h4>{`Please enter Insured and Dependant Details`}</h4><hr/>
            <h5>Insured Details</h5>
                  <form>
                    <div className="row">
                      <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                          <label htmlFor="">First Name </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                          <label htmlFor="">Last Name </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                          <label htmlFor="">Middle Name </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="row">
                          <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                            <label htmlFor="">{`Date of Birth `}</label>
                            <input type="date" className="form-control" />
                          </div>
                          <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                            <label htmlFor="">Gender </label>
                            <select className="form-control">
                              <option value="Male">Grapefruit</option>
                              <option value="Female">Lime</option>
                              <option selected value="Other">Coconut</option>
                            </select>
                          </div>
                          <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                            <label htmlFor="">Occupation Status</label>
                            <select className="form-control">
                              <option value="Working- Fulltime">Grapefruit</option>
                              <option value="Working- Part time">Lime</option>
                              <option selected value="Working from Home">Coconut</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                              <label htmlFor="">Phone </label>
                              <input type="number" className="form-control" />
                            </div>
                            <div className="form-group col-lg-4  col-md-4 col-sm-12  col-xs-12">
                              <label htmlFor="">Email </label>
                              <input type="email" className="form-control" />
                            </div>

                          </div>

                  </form>
                  <h5>Address</h5><hr/>
                  <ReactTable columns = {tableData}  defaultPageSize={1}  className="-striped -highlight" showPagination={false} minRows= {0}/>
                  </div>
            </div>
		);
    }
}

export default PolicyTabContent1;
