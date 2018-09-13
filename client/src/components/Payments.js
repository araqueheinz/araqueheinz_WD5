import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';

// import { connect } from 'react-redux';

// import * as actions from '../actions';

class Payments extends Component {

  render() {
      
    return (
      <StripeCheckout
        
        amount={500}
        name = "WD5 Survey System"
        description="$5 Order for 5 credits"
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default Payments;