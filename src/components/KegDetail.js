import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <hr />
      <h3>{keg.name}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.brand}</h3>
      <h3>{keg.flavor}</h3>
      {keg.pintsRemaining === 0 ?
        <h3>Out of stock! Sorry for the inconvenience!</h3>
        : <h3>{keg.pintsRemaining}</h3>}
        {keg.pintsRemaining > 0 && keg.pintsRemaining <= 10
        ? <h4>This keg is almost empty! Get it before it's gone!</h4>
        : null}
        { keg.pintsRemaining > 0
        ? <button onClick={props.onClickingBuy} className="btn btn-success">Buy A Pint</button>
        : <button onClick={props.onClickingRestock} className="btn btn-info">Restock Keg</button>}
        <button onClick={() => onClickingEdit(keg.id)} className="btn btn-warning">Update Keg Info</button>
        <button onClick={() => onClickingDelete(keg.id)} className="btn btn-danger">Delete Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
}

export default KegDetail;