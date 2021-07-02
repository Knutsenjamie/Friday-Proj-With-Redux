import React from "react";
import PropTypes from "prop-types";

function Keg(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        <h3>{props.brand}</h3>
        <h3>{props.flavor}</h3>
        <h3>{props.amount}</h3>

        <hr />
      </div>
    </React.Fragment >
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;