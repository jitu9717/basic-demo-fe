import ACTION from '../../../constants/actions';

// Action Creater to Update list of containers
export const getBeerList = (beerList) => {
    return {
        type: ACTION.GET_BEER_LIST,
        payload: beerList,
    }
};

