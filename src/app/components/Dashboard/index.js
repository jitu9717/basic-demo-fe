import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { fetchBeerList } from './async.action';
import BeerList from '../BeerList';
import LoadingIndicator from '../Common/LoadingIndicator';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLoader: true,
        };
    }

    componentDidMount(){
        const { fetchBeerList } = this.props;
        fetchBeerList().then(response => {
            if (response.status === 200) {
                this.setState({ showLoader: false });
            } else if (response.status !== 200) {
                this.setState({ showLoader: false });
            }
        }).catch(() => this.setState({ showLoader: false }));
    }

    
    render() {
        const { beerList } = this.props;
        const { showLoader } = this.state;
        return (
            <div className="pageLayout">
                <LoadingIndicator showLoader={showLoader}/>
                <BeerList beerList={beerList} />
            </div>
        );
    }
}

Dashboard.defaultProps = {
    beerList: [],
};

Dashboard.propTypes = {
    fetchBeerList: PropTypes.func.isRequired,
};

export const mapStateToProps = state => {
    return  ({
        beerList: state.beerList,
    })
};

export const mapDispatchToProps = dispatch => ({
    fetchBeerList: () => dispatch(fetchBeerList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


export { Dashboard as DashboardContainer };
