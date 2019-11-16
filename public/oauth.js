import Cookie from 'js-cookie';
import * as conf from '../settings';
import axios from 'axios';

async function exchangeToken(code) {
    return await axios.post('https://discordapp.com/api/oauth2/token', `code=${code}&grant_type=authorization_code&client_id=${conf.clientID}&client_secret=${conf.clientSecret}&redirect_uri=${conf.redirect_uri}&scope=guilds`, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).then(
        (res) => {
            console.log("OK");
            return res.data;
        }, error => {
            console.log(error.response.status.toString());
            if (error.response.status.toString() === "400"){
                console.log(error.response.status);
                return error.response.status;
            }
        }
    );
}

async function refreshToken( refreshToken ) {
    const res = await axios.post('https://discordapp.com/api/oauth2/token', `refresh_token=${refreshToken}&grant_type=refresh_token&client_id=${conf.clientID}&client_secret=${conf.clientSecret}&redirect_uri=${conf.redirect_uri}&scope=guilds`, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).catch(console.error);
    console.log(res);
    return res.data;
}

function saveTokens( token, refreshToken){
    Cookie.set('token', token);
    Cookie.set('refreshToken', refreshToken);
    return `Saved Token ${token} and RefreshToken ${refreshToken}`
}

function deleteTokens(){
    Cookie.remove('token');
    Cookie.remove('refreshToken');
    return `deleted Token and RefreshToken`
}

function getTokensForBrowser() {
    let token = Cookie.getJSON('token');
    let refreshToken = Cookie.getJSON('refreshToken');
    console.log(token, refreshToken);
    return {
        token: token,
        refreshToken: refreshToken
    };
}

function getTokensForServer(req) {
    if (req.headers.cookie) {
        const cookieToken = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='));
        const cookieRefreshToken = req.headers.cookie.split(';').find(c => c.trim().startsWith('refreshToken='));

        let token = cookieToken.split('=')[1];
        let refreshToken = cookieRefreshToken.split('=')[1];
        console.log(token, refreshToken);
        return {
            token: token,
            refreshToken: refreshToken
        };
    }
}

export {
    exchangeToken,
    refreshToken,
    saveTokens,
    deleteTokens,
    getTokensForBrowser,
    getTokensForServer
};
