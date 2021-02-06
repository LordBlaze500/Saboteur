import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import MainView from './components/MainView/MainView';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MainView />
  </Provider>,
  rootElement
)