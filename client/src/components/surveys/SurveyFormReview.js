// SurveyFormReview shows users their form inputs for review

//Import loadash to iterate through the arrays and objects easier
import _ from 'lodash';

import React from 'react';

import { connect } from 'react-redux';

import formFields from './formFields';

import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';


//Destructuring the props that are coming from SurveyNew
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (

      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Double check your entries!</h5>
      {reviewFields}
      {/* Add a back button to take the user back to editing the form */}
      <button
        className="red darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>

       {/*Add a sent button that will trigger the function to sent the emails */}
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));