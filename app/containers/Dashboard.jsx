import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Dashboard extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { user: { role } } = this.props;
      return (
        <div>
          <h2>Dashboard</h2>
          <p>Welcome to the Dasboard. will updated later with some serious form or menu here.</p>
          <p>by the way, your role is <strong>{ role }</strong></p>
        </div>
      );
    }
}

Dashboard.propType = {
  user: PropTypes.object
};

function mapStateToProps({user}) {
  return {
    user
  };
}

export default connect(mapStateToProps)(Dashboard);
