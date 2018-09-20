//SurveyForm shows a form for a user to add input
import _ from 'lodash';

import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';

import formFields from './formFields';

import validateEmails from '../../utils/validateEmails';



class SurveyForm extends Component {

    renderFields() {
      return _.map(formFields, ({ label, name }) => {

        return (

          <Field
            key={name}
            component={SurveyField}
            type="text"
            label={label}
            name={name}
          />

        );
      });
    }
  

    render() {
        return (
          <div>
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
              {this.renderFields()}
              <Link to="/surveys" className="red btn-flat white-text">
                Cancel
              </Link>
              <button type="submit" className="teal btn-flat right white-text">
                Next
                <i className="material-icons right">done</i>
              </button>
            </form>
          </div>
        );
      }
    }
  
    function validate(values) {

      const errors = {};
      
      //If there is nt error display nothing empty
      errors.recipients = validateEmails(values.recipients || '');
    
      _.each(formFields, ({ name }) => {
        if (!values[name]) {
          errors[name] = 'Do not leave this space blank';
        }
      });
    
      return errors;
    }
    
    //This is where we initially wired up redux-form
    export default reduxForm({
      validate,
      //this is going to store all the values from the form
      //out on the redux store!
      form: 'surveyForm',
      //This will help us to keep the input values,
      //so if the user decides to go back, it doesn't need
      //to type everything again
      destroyOnUnmount: false
    })(SurveyForm);