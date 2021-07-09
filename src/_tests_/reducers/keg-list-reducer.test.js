import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
    
    let action;

    const kegData = {
        name: 'Test Flavor Name',
        brand: 'Test Brand',
        flavor: 'Test Flavor',
        price: '$11.50',
        pintsRemaining: 124,
        id: 1
    }

    const currentState = {
        // 1: {
        // name: 'Test Flavor Name',
        // brand: 'Test Brand',
        // flavor: 'Test Flavor',
        // price: '$11.50',
        // pintsRemaining: 124,
        // id: 1 
        // },

        2: {
        name: 'Test Flavor Name 2',
        brand: 'Test Brand 2',
        flavor: 'Test Flavor 2',
        price: '$5.75',
        pintsRemaining: 62,
        id: 2 
        },
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

    test('Should successfully delete a keg', () => {
        action = {
            type: 'DELETE_KEG',
            id: 1
        };
        expect(kegListReducer(currentState, action)).toEqual({
            2: {name: 'Test Flavor Name 2',
            brand: 'Test Brand 2',
            flavor: 'Test Flavor 2',
            price: '$5.75',
            pintsRemaining: 62,
            id: 2 }
        });
    });
    
        
        test('Should return default state if there is no action type passed into the reducer', () => {
        expect(kegListReducer({}, { type: null })).toEqual({});
    });
});


