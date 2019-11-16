import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as settings from '../settings';

class Header extends React.Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool
    };

    UNSAFE_componentWillMount() {
        if(this.props.isLoggedIn){
            return this.isLoggedIn = this.props.isLoggedIn;
        }else{
            if(this.props.children) return this.isLoggedIn = this.props.children.isLoggedIn;
        }
    }

    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a title={"Home"}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/public">
                            <a title={"Public"}>Public</a>
                        </Link>
                    </li>
                    { this.isLoggedIn ?
                        <li>
                            <Link href="/guilds">
                                <a title="My servers">Guilds Page</a>
                            </Link>
                        </li>
                        :
                        <li>
                            <a href={`https://discordapp.com/api/oauth2/authorize?client_id=${settings.clientID}&redirect_uri=${settings.redirect_uri}&response_type=code&scope=guilds%20identify`}>Login</a>
                        </li>
                    }
                    {
                        this.isLoggedIn ?
                            <li>
                                <Link href="/logout">
                                    <a title="Logout">Logout Page</a>
                                </Link>
                            </li>
                            : ''
                    }
                    {
                        this.isLoggedIn ?
                            <li>
                                <Link href="/secret">
                                    <a title="Secret">Secret Page</a>
                                </Link>
                            </li>
                            : ''
                    }
                </ul>
            </nav>
        )

    }
}

export default Header;
