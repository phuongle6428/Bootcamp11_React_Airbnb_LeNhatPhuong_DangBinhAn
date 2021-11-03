import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';

export default function Profile() {
    const {userBackData} = useSelector(state => state.auth);
    if(!userBackData) {
        <Redirect to="/login" />
    }
    return (
        <div>
            
        </div>
    )
}
