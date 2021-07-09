import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
    return (
        <React.Fragment>
            <hr />
        {Object.values(props.kegList).map((keg) =>
            <Keg
                whenKegClicked = { props.onKegSelection }
                name={keg.name}
                brand={keg.brand}
                flavor={keg.flavor}
                price={keg.price}
                pintsRemaining={keg.pintsRemaining}
                id={keg.id}
                key={keg.id}/>
    )}
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array,
};

export default KegList;

