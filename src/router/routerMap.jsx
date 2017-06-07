/**
 * Created by hzn on 2017/5/31.
 */
import React, {Component} from 'react';
import { Router, Route, IndexRoute } from 'react-router'
import rou from "../../src/router"
import { browserHistory } from 'react-router'

class RouterMap extends Component {
    render() {
        return  <Router history={browserHistory}>{rou}</Router>
    }
}

export default RouterMap