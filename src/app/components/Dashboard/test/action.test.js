import * as actions from '../action';
import * as types from '../../../../constants/actions';

describe('should fetch beer list correctly',() => {
    it('get beer list', () => {
        let payload = [{beerType : "Aler Beer", id: 1}, {beerType : "Aler Beer2", id: 2}];
        const expectedAction = {
            type: types.default.GET_BEER_LIST,
            payload
        };
        expect(actions.getBeerList(payload)).toEqual(expectedAction);
    });
});