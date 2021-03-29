import React from 'react';
import {Route} from 'react-router-dom';
import ArticleListView from './ArticleListView'
import ArticleDetailView from './ArticleDetailView'
import {Switch} from 'react-router-dom'
import Login from './Login'

function Routes() {
    return (
        <div>
            <Switch>
            <Route exact path='/' component={ArticleListView} />
            <Route exact path='articles/:articleID/' component={ArticleDetailView} />
            <Route exact path='/login/' component={Login} />
            </Switch>

        </div>
    )
}

export default Routes
