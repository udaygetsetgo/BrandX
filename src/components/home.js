import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultFunction } from '../actions';
import Quotes from './quotes'
import { Tabs, Tab, Carousel } from 'react-bootstrap';
import QuoteForm from './quoteForm.js';
import PolicyTab from './policyTab.js'


class Home extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {

    return (
          <div >
              <Tabs defaultActiveKey={1} animation={false} id="homeNavbar" className = 'home'>
                  <Tab eventKey={1} title="Home">
                  <Carousel >
                      <Carousel.Item>
                          <img  height={250} alt="900x500" src={require('../images/are-you-covered.png')} />
                        <Carousel.Caption>

                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                          <img  height={250} alt="900x500" src={require('../images/insurance.png')}  />
                        <Carousel.Caption>

                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                      <img  height={250} alt="900x500" src={require('../images/insurance-all.png')} />
                        <Carousel.Caption>

                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>

                      <div className="row clientInfo">
                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12"></div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12"><h5>99%</h5> Claims settled<br/> instantly last week</div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12"><h5>10K</h5>New members last week</div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12"><h5>Over 3M</h5> Families Covered <br/> by BrandX</div>
                      </div>
                      <QuoteForm></QuoteForm>
                      <div className='contactUs'> We would like to hear from you </div>
                      <div className='contactUs'> Contact Us @...</div>
                  </Tab>
                  <Tab eventKey={2} title="Quote">
                    <Quotes></Quotes>
                  </Tab>
                  <Tab eventKey={3} title="Policies" ><PolicyTab/></Tab>
                  <Tab eventKey={4} title="Claims" ></Tab>
                  <Tab eventKey={5} title="Support" ></Tab>
              </Tabs>
            </div>

    )
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(Home);
