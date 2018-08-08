// basic react component starting template
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PolicyData from './policyData.js'

class QuoteTabs extends Component {
    render() {

		return (
      <div >
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example" className='quoteTab'>
          <Tab eventKey={1} title="Weekly">
            <PolicyData {...this.props.policies[0]}></PolicyData>
          </Tab>
          <Tab eventKey={2} title="Fortnightly">
            <PolicyData {...this.props.policies[1]}></PolicyData>
          </Tab>
          <Tab eventKey={3} title="Monthly">
            <PolicyData {...this.props.policies[2]}></PolicyData>
          </Tab>
          <Tab eventKey={4} title="Yearly">
            <PolicyData {...this.props.policies[3]}></PolicyData>
          </Tab>
        </Tabs>
      </div>
		);
    }
}

export default QuoteTabs;
