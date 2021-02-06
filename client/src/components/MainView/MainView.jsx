import React from 'react';
import { connect } from 'react-redux';
import TestComponent from '../TestComponent/TestComponent.jsx';

export class MainView extends React.PureComponent {
    render() {
        const { testFieldProp } = this.props;

        return <div>
            Main View Here
            <span>{testFieldProp}</span>
            <TestComponent />
        </div>
    }
}

const mapStateToProps = (store) => {
    return {
        testFieldProp: store.testReducer.testField,
    }
}

export default connect(mapStateToProps)(MainView);
