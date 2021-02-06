import React from 'react';
import { connect } from 'react-redux';
import TestComponent from '../TestComponent/TestComponent';
import { storeType } from '../../redux/store';

interface Props {
    testFieldProp: string,
}

export class MainView extends React.PureComponent<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
    }

    render() : JSX.Element {
        const { testFieldProp } = this.props;

        return <div>
            Main View Here
            <span>{testFieldProp}</span>
            <TestComponent />
        </div>
    }
}

const mapStateToProps = (store : storeType) => {
    return {
        testFieldProp: store.testReducer.testField,
    }
}

export default connect(mapStateToProps)(MainView);
