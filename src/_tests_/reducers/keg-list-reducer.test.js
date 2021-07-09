import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
    
    let action;

    const kegData = {
        name: 'Test Flavor Name',
        brand: 'Test Brand',
        flavor: 'Test Flavor',
        price: '$2.50',
        pintsRemaining: 124,
        id: 1
    }

    
    test('Should successfully add new keg data to masterKegList', () => {
        const { name, brand, flavor, price, pintsRemaining, id } = kegData;
        action = {
            type: 'ADD_KEG',
            name: name,
            brand: brand,
            flavor: flavor,
            price: price,
            pintsRemaining: pintsRemaining,
            id: id
        };
        
        expect(kegListReducer({}, action)).toEqual({
            [id] : {
                name: name,
                brand: brand,
                flavor: flavor,
                price: price,
                pintsRemaining: pintsRemaining,
                id: id
            }
        });
    });
        
        test('Should return default state if there is no action type passed into the reducer', () => {
        expect(kegListReducer({}, { type: null })).toEqual({});
    });
});


