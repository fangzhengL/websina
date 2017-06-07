/**
 * Created by hzn on 2017/6/5.
 */

import { Router, Route, IndexRoute } from 'react-router'
import React, {Component} from 'react';
import App from "./components/App"
module.exports = (
    <Route>
        <Route path='/' component={App}/>
    </Route>
)