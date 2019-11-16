import React from 'react';
import Header from '../comps/Header';
import { getTokensForServer, getTokensForBrowser } from "./oauth";

export default Page => class Template extends React.Component {
    static async getInitialProps({req}) {
        let loggedInUser = process.browser ? await getTokensForBrowser() : await getTokensForServer(req);
        console.log("LoggedIn:",loggedInUser);
        if(loggedInUser === undefined || loggedInUser.token === undefined) loggedInUser = false;
        console.log(loggedInUser);
        const pageProperties = Page.getInitialProps && await Page.getInitialProps(req);
        console.log(pageProperties);
        return {
            ...pageProperties,
            loggedInUser,
            isLoggedIn: !!loggedInUser
        };
    }

    render() {
        return(
            <div>
                <Header>{ this.props }</Header>
                <Page>{ this.props }</Page>
            </div>
        )
    }
}