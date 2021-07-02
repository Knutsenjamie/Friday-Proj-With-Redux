import React from "react";
import ReusableForm from "./ReusableForm";


function EditKegForm(props){
    const { keg } = props;
  
    function handleEditKegFormSubmission(event) {
      event.preventDefault();
      props.onEditKeg({names: event.target.names.value, price: event.target.price.value, brand: event.target.brand.value, flavor: event.target.flavor.value, id: keg.id});
    }
  
    return (
      <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleEditKegFormSubmission}
          buttonText="Update Keg Information" />
      </React.Fragment>
    );
  }

export default EditKegForm;