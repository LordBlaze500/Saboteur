import React from 'react';
import { connect } from 'react-redux';
import actionTypes from '../../redux/actionTypes';
import { dispatchType } from '../../redux/store';

interface Props {
    testAction: () => void,
}

export class TestComponent extends React.PureComponent<Props> {
    render() : JSX.Element {
        const { testAction } = this.props;

        return <div>
            <button onClick={testAction}>XD</button>
        </div>
    }
}

const mapDispatchToProps = (dispatch : dispatchType) => {
    return {
        testAction: () => {
            dispatch({ type: actionTypes.TEST_ACTION })
        }
    }
}

export default connect(null, mapDispatchToProps)(TestComponent);