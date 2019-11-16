import React from 'react'
import {exchangeToken, saveTokens} from "../public/oauth";
import Router from 'next/router'
import PropTypes from "prop-types";

export default class extends React.Component {
    //({url: {query: {code}}}) =>
    static getInitialProps({query}) {
        //console.log(query.code)
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
        console.log(data);
        /*console.log(data.error);
        if (data.error) return Router.push('/'); stop();*/
        if(data !== 400){
            console.log(data.access_token,data.refresh_token);
            await saveTokens(data.access_token, data.refresh_token);
            console.log(await saveTokens(data.access_token, data.refresh_token));
        }
        await Router.push('/');

    }

    render(){
        return null;
    }


};