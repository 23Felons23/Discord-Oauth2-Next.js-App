import React from 'react'
import { exchangeToken, saveTokens } from "../public/oauth";
import Router from 'next/router'
import PropTypes from "prop-types";

export default class extends React.Component {
    static getInitialProps({query}) {
        return {
            code: query.code
        };
    }

    static propTypes = {
        isLoggedIn: PropTypes.bool
    };

    async componentDidMount () {
        if (this.props.code === undefined)  await Router.push('/'); stop();
        const data = await exchangeToken(`${this.props.code}`);
        if(data !== 400){
            await saveTokens(data.access_token, data.refresh_token);
        }
        await Router.push('/');
    }
    render(){
        return null;
    }
};