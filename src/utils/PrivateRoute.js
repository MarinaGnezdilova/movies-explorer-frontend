import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function PrivateRoute() {
    const { loggedIn } = React.useContext(CurrentUserContext);
    return (
        loggedIn ? <Outlet /> : <Navigate to="/signin" />

    )
}

export default PrivateRoute;