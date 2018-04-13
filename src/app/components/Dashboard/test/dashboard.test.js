import React from 'react';
import { fetchBeerList } from '../async.action';
import { shallow } from 'enzyme';
import {DashboardContainer, mapStateToProps, mapDispatchToProps} from '../index';
import LoadingIndicator from '../../Common/LoadingIndicator';
import BeerList from '../../BeerList';


jest.mock('../async.action');

const FETCH_ACTION = Symbol('');
fetchBeerList.mockReturnValue(FETCH_ACTION);


describe('Dashboard component should render correctly', () => {
	let allProps,
		dashboardContainer;

	beforeEach(() => {
		allProps = {
			beerList: [{beerType : "Aler Beer", id: 1}],
			fetchBeerList: () => new Promise((resolve, reject)=>{}),
		};
		dashboardContainer = shallow(<DashboardContainer {...allProps}  />);
	});

	it('renders correctly without beerList', () => {
		allProps.beerList = [];
		expect(dashboardContainer).toMatchSnapshot();
	});

    describe("rendered `LoadingIndicator Component`", () => {
        it("always renders a `LoadingIndicator Component`", () => {
            expect(dashboardContainer.find(LoadingIndicator).length).toBe(1);
        });

        it("LoadingIndicator receive 1 props", () => {
            const loader = dashboardContainer.find(LoadingIndicator);
            expect(Object.keys(loader.props()).length).toBe(1);
        });
    });

    describe("rendered `BeerList Component`", () => {
        it("always renders a `BeerList Component`", () => {
            expect(dashboardContainer.find(BeerList).length).toBe(1);
        });

        it("BeerList receive 1 props", () => {
            const beerlist = dashboardContainer.find(BeerList);
            expect(Object.keys(beerlist.props()).length).toBe(1);
        });
    });



});

describe('mapStateToProps ', () => {
	it('should render correct object', () => {
		expect(mapStateToProps).toBeDefined();
	});
});

describe('mapDispatchToProps', () => {
	const dispatch = jest.fn().mockImplementation(x => x);
	const actionDispatchers = mapDispatchToProps(dispatch);

	it('should render the correct list of methods', () => {
	   expect(mapDispatchToProps()).toEqual({
		   fetchBeerList: expect.any(Function),
	   })
	});

	it('returns the result of dispatching fetchBeerList correctly', () => {
		expect(actionDispatchers.fetchBeerList()).toBe(FETCH_ACTION);
		expect(dispatch).toHaveBeenCalledWith(FETCH_ACTION);
	});
});





