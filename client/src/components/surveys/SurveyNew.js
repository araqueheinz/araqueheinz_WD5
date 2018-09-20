//SurveyNew shows SurveyForm and SurveyFormReview

import React, { Component } from 'react';
/*
  Import the reduxForm property to use to be able to delete the 
  Input values when the user clicks cancel.
*/
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';

import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}
/*
  We are going to add the redux form 
  to tell that this component is tied to 
  SurveyFrom
*/
export default reduxForm({
/*
  It will get rid of all the values once you move
  to surveyForm
  It is the default behavior of redux form
*/
  form: 'surveyForm'
})(SurveyNew);