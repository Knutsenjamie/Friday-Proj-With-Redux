import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Keg name' />
        <hr />
        <input
          type='text'
          name='brand'
          placeholder='Keg brand' />
        <hr />
        <input
          type='text'
          name='flavor'
          placeholder='Keg flavor' />
        <hr />
        <input
          type='text'
          name='price'
          placeholder='Keg price' />
        <hr />
        <input
          type='number'
          name='amount'
          placeholder='Keg amount' />
        <hr />
        <button type='submit'>{props.buttonText}</button>
        <hr />
      </form>
    </React.Fragment>
  );
};

ReusableForm.protoTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;