//SurveyField contains logic o render a single label and text input
import React from 'react';

//Nested destructuring, 2 levels of destructuring
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        
        {touched && error}
      </div>
    </div>
  );
};