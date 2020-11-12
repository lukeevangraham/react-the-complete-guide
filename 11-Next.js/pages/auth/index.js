import React from 'react';

import User from '../../components/User'

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page - {props.appName} </h1>
        <User name="Max" age="39" />
    </div>
)

authIndexPage.getInitialProps = async (context) => {
    return { appName: 'Super App (Auth)' }
}

export default authIndexPage