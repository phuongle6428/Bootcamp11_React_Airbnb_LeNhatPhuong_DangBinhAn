import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

export default function UserPath({children, ...rest}) {
    const userBackData = JSON.parse(localStorage.getItem("Auth"))
    console.log(userBackData)
    if(!userBackData) {
        return <Redirect to="/login" />
    }
    return (
        <Route {...rest}>{children}</Route>
    )
}
