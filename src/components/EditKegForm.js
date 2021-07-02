import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditKegForm(props){
    const { keg } = props;
  
    function handleEditKegFormSubmission(event) {
      event.preventDefault();
      props.onEditKeg({
        names: event.target.names.value, 
        price: event.target.price.value, 
        brand: event.target.brand.value, 
        flavor: event.target.flavor.value, 
        pintsRemaining: parseInt(event.target.pintsRemaining.value),
        id: keg.id
      });
    }
  
    return (
      <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleEditKegFormSubmission}
          buttonText="Update Keg Information" />
      </React.Fragment>
    );
  }

  EditKegForm.propTypes = {
    keg: PropTypes.object,
    onEditKeg: PropTypes.func
  }
  
export default EditKegForm;