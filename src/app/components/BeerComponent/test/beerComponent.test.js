import React from 'react';
import { shallow } from 'enzyme';

import BeerComponent from '../index';

describe('BeerComponent component renders the BeerComponent correctly', () => {
    let beerComp, allProps;

    beforeEach(()=> {
        allProps = {
            beerContentDetail: { beerType: "Aler Beer", id: 1 },
        };
        beerComp = shallow(<BeerComponent {...allProps} />);
    });

    it('render the BeerComponent component', () => {
        expect(beerComp.length).toEqual(1)
    });

    it('renders with no data', () => {
        allProps.beerContentDetail = {};
        expect(beerComp).toMatchSnapshot();
    });
});
