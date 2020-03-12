import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { About } from './components/About'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/' component={App} />
                <Route path='/about' component={About} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
