export default (state = {}, action) => {
    const { name, brand, flavor, price, pintsRemaining, id } = action;
    switch (action.type) {
    case 'ADD_KEG':
        return Object.assign({}, state, {
        [id]: {
            name: name,
            brand: brand,
            flavor: flavor,
            price: price, 
            pintsRemaining: pintsRemaining,
            id: id
        }
    });
    case 'DELETE_KEG':
        const newState = { ...state };
        delete newState[id];
        return newState;
    default:
        return state;
    }
};