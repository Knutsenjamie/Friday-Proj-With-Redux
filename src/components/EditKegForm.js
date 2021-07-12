import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";



function EditKegForm(props){
    const { keg } = props;
  
    function handleEditKegFormSubmission(e) {
      e.preventDefault();
      props.onEditKeg({
        name: e.target.name.value, 
        price: e.target.price.value, 
        brand: e.target.brand.value, 
        flavor: e.target.flavor.value, 
        pintsRemaining: parseInt(e.target.pintsRemaining.value),
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