import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ProtectedRoute from '../../components/ProtectedRoute';
import App from '../../pages/AppContainer';
import NotFoundRoute from '../NotFoundRoute';
const AppContainer = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/not-found" component={NotFoundRoute} />
                <ProtectedRoute component={() => <App />} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppContainer
