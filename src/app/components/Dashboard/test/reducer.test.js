import ACTION from '../../../../constants/actions';
import beerListReducer from '../reducer';

describe('testing beerList reducer',() => {

    let initialState = [];

    let action = {
        type: null,
        payload:null
    };

    beforeEach(() => {
        initialState = [];
    });

    it('GET_BEER_LIST action should update state to contain beerList', () => {
        action.type = ACTION.GET_BEER_LIST;
        action.payload = {
            beers:[
                {
                    "id": 1,
                    "beerType": "Aler Beer"
                },
                {
                    "id": 2,
                    "beerType": "Draught Beer"
                }
            ]
        }
        ;
        let changedState = beerListReducer(initialState, action);
        expect(changedState).toEqual(action.payload.beers);
    });

});
