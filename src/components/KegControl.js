import React from "react";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import NewKegForm from "./NewKegForm";
import EditKegForm from './EditKegForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

    class KegControl extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        selectedKeg: null,
        editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
        this.setState({
            selectedKeg: null,
            editing: false
        });
        } else {
        const { dispatch } = this.props;
        const action = {
            type: 'TOGGLE_FORM'
        }
        dispatch(action);
    }
}

    handleChangingSelectedKeg = (id) => {
        const selectedKeg = this.props.masterKegList[id];
        this.setState({selectedKeg: selectedKeg});
    }

    handleAddingNewKegToList = (newKeg) => {
        const { dispatch } = this.props;
        const { id, name, brand, flavor, price, pintsRemaining} = newKeg;
        const action = {
            type: 'ADD_KEG',
            id: id,
            name: name,
            brand: brand,
            flavor: flavor,
            price: price,
            pintsRemaining: pintsRemaining,
        }
        dispatch(action);
        const action2 = {
            type: 'TOGGLE_FORM'
        }
        dispatch(action2);
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }
    
    handleEditingKegInList = (kegToEdit) => {
        const { dispatch } = this.props;
        const { id, name, brand, flavor, price, pintsRemaining } = kegToEdit;
        const action = {
          type: 'ADD_KEG',
          id: id,
          name: name,
          brand: brand,
          flavor: flavor,
          price: price,
          pintsRemaining: pintsRemaining,
        }
        dispatch(action);
        this.setState({
          editing: false,
          selectedKeg: null
        });
    }

    handleBuyClick = () => {
        const selectedKeg = this.state.selectedKeg;
        const pintBuy = Object.assign({}, selectedKeg, {pintsRemaining: selectedKeg.pintsRemaining - 1});
        const editedMasterKegList = this.state.masterKegList
        .filter(keg => keg.id !== this.state.selectedKeg.id)
        .concat(pintBuy);
        this.setState({
        masterKegList: editedMasterKegList,
        selectedKeg: pintBuy
        });
    }

    handleRestockClick = () => {
        const selectedKeg = this.state.selectedKeg;
        const kegRestock = Object.assign({}, selectedKeg, {pintsRemaining: selectedKeg.pintsRemaining + 124});
        const editedMasterKegList = this.state.masterKegList
            .filter(keg => keg.id !== this.state.selectedKeg.id)
            .concat(kegRestock);
        this.setState({
            masterKegList: editedMasterKegList,
            selectedKeg: kegRestock
        });
    }
    
    handleDeletingKeg = (id) => {
        const { dispatch } = this.props;
        const action = {
            type: 'DELETE_KEG',
            id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing){
            currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
            buttonText = "Return to Keg List"
        } else if (this.state.selectedKeg != null) {
            currentlyVisibleState =
            <KegDetail
            keg = {this.state.selectedKeg}
            onClickingEdit = {this.handleEditClick}
            onClickingBuy = {this.handleBuyClick}
            onClickingRestock = {this.handleRestockClick}
            onClickingDelete = {this.handleDeletingKeg} />;
            buttonText = "Return to Keg List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
            buttonText = "Return to Keg List";
        } else {
            currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
            buttonText = "Add New Keg";
        }
        
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button className="btn btn-warning" onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

KegControl.propTypes = {
    masterKegList: PropTypes.object
};


const mapStateToProps = state => {
    return {
        masterKegList: state.masterKegList,
        formVisibleOnPage: state.formVisibleOnPage
      }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;



