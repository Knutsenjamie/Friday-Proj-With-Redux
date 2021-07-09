import React from "react";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import NewKegForm from "./NewKegForm";
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';

    class KegControl extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
        this.setState({
            formVisibleOnPage: false,
            selectedKeg: null,
            editing: false
        });
        } else {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
        }
    }

    handleChangingSelectedKeg = (id) => {
        const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
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
        this.setState({formVisibleOnPage: false});
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
        const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
        this.setState({
            masterKegList: newMasterKegList,
            selectedKeg: null
        });
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
            currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
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

KegControl = connect()(KegControl);

export default KegControl;



