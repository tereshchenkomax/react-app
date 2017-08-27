import React from 'react'
import {render} from 'react-dom'
import './stylesheets/ui.scss'
import { App} from './components/App'
import { Whoops404} from './components/Whoops404'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

window.React = React;

render(
    <Router history={history}>
        <div>
            <Route path="/" component={App} />
            {/*<Route path="/list-days" component={App} />*/}
            {/*<Route path="/add-day" component={App} />*/}
            <Route path="/test" component={Whoops404} />
        </div>
    </Router>
    , document.getElementById('react-container')
);

