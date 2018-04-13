import React from 'react';
import { PropTypes } from 'prop-types';

const BeerComponent = ({ beerContentDetail }) => {
    return (
         <div className="col-sm-6  col-md-6 col-lg-4 commonBoxModel">
              <div className="beerContainer">
                <h3 className="beertype">{beerContentDetail.beerType}</h3>
              </div>
          </div>
    );
};

BeerComponent.propTypes = {
    beerContentDetail: PropTypes.object.isRequired,
};

export default BeerComponent;