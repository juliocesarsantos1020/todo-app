import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';

import Todo from './templates/todo'
import About from './templates/about'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/todos" component={Todo} />
                    <Route path="/about" component={About} />
                    <Redirect from="*" to="/todos" />
                </Switch>
            </div>
        )
    }
}