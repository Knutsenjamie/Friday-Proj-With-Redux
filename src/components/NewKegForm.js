import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({ name: e.target.name.value, brand: e.target.brand.value, flavor: e.target.flavor.value, price: e.target.price.value, amount: e.target.amount.value, id: v4() });
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        button="Add new keg" />
    </React.Fragment>
  );
};

NewKegForm.protoTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;