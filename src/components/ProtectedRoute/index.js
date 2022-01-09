import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, componentLoaded, ...rest }) => {

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                return true ?
                    (<Component {...routeProps} />)
                    :
                    <Redirect to="not-found" />

            }}
        />
    )
}



export default ProtectedRoute
