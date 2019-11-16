import React from 'react';
import { deleteTokens } from '../public/oauth';
import Router from 'next/router';

export default class extends React.Component {
    async componentDidMount () {
        const action = await deleteTokens();
        console.log(action);
        await Router.push('/');
    }
    render() {
        return null;
    }
}