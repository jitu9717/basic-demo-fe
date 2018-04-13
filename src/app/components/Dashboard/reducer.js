import ACTION from '../../../constants/actions';
const initialState = [];

// function to update container list in redux state
const updateBeerData = (state, { beers }) => {
    return [...beers ]
};

// BeerList Reducer
export default function beerListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_BEER_LIST: return updateBeerData(state, action.payload);
        default: return state;
    }
};
