/**
 * Created by hzn on 2017/5/31.
 */
import React, {Component} from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import App from "../components/App"

class RouterMap extends Component {
    render() {
        return <Router history={this.props.history}>
            <Route path='/' component={App}/>
        </Router>
    }
}

export default RouterMap