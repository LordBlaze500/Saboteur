import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../redux/actionTypes';

export class TestComponent extends React.PureComponent {
    render() {
        const { testAction } = this.props;

        return <div>
            <button onClick={testAction}>XD</button>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: () => {
            dispatch({ type: actionTypes.TEST_ACTION })
        }
    }
}

export default connect(null, mapDispatchToProps)(TestComponent);