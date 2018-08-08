// basic react component starting template
import React, { Component } from 'react';
import { Tabs, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import PolicyTabContent1 from './policyTabContent1.js'
import PolicyTabContent3 from './policyTabContent3.js'

class PolicyTab extends Component {
    render() {

		return (
      <div className ='policyTab'>
      <div className="quoteBanner"><h5>New Policy</h5>{`Apply for acover in simple steps. If needed you can modify the quote in details section</br> You are applying for quote #23424112`} </div>
        <Tab.Container id="left-tabs-example"  defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={1} lg={1} md={1} xs={1}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">1</NavItem><div className="vl"></div>
                <NavItem eventKey="second"> 2</NavItem><div className="vl"></div>
                <NavItem eventKey="third">3</NavItem><div className="vl"></div>
                <NavItem eventKey="fourth"> 4</NavItem><div className="vl"></div>
                <NavItem eventKey="fifth">5</NavItem>
              </Nav>
            </Col>
            <Col sm={11} lg={11} md={11} xs={11}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first"><PolicyTabContent1></PolicyTabContent1></Tab.Pane>
                <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                <Tab.Pane eventKey="third"><PolicyTabContent3></PolicyTabContent3></Tab.Pane>
                <Tab.Pane eventKey="fourth">Tab 4 content</Tab.Pane>
                <Tab.Pane eventKey="fifth">Tab 5 content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
		);
    }
}
export default PolicyTab;
