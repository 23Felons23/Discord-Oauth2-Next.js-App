import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as settings from '../settings';

class Header extends React.Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool
    };
    UNSAFE_componentWillMount() {
        console.log("Props :",this.props);
        //this.isLoggedIn = this.props.isLoggedIn ? this.props.isLoggedIn : this.props.children.isLoggedIn;
        if(this.props.isLoggedIn){
            console.log("ok1");
            return this.isLoggedIn = this.props.isLoggedIn;
        }else{
            console.log("ok2");
            if(this.props.children) return this.isLoggedIn = this.props.children.isLoggedIn;
        }
    }

    componentDidMount() {
        console.log("Props after mount:",this.props);
    }

    render(){
        return(
            <nav>
                {console.log(this.isLoggedIn)}
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
                            <a href={`https://discordapp.com/api/oauth2/authorize?client_id=${settings.clientID}&redirect_uri=${settings.redirect_uri}&response_type=code&scope=guilds`}>Login</a>
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
/*const Header = ({isLoggedIn}) => (
    <nav>
      {console.log(isLoggedIn)}
      <ul>
          <li>
              <a>Home</a>
          </li>
          <li>
              <Link href="/public">
                  <a title={"Public"}>Public</a>
              </Link>
          </li>
          { isLoggedIn ?
              <li>
                  <Link href="/guilds">
                  <a title="My servers">Guilds Page</a>
                  </Link>
              </li>
              :
             <li>
                 <a href={`https://discordapp.com/api/oauth2/authorize?client_id=${settings.clientID}&redirect_uri=${settings.redirect_uri}&response_type=code&scope=guilds`}>Login</a>
             </li>
          }
          {
               isLoggedIn ?
                  <li>
                      <Link href="/logout">
                          <a title="Logout">Logout Page</a>
                      </Link>
                  </li>
                  : ''
          }
          {
              isLoggedIn ?
                  <li>
                      <Link href="/secret">
                          <a title="Secret">Secret Page</a>
                      </Link>
                  </li>
                  : ''
          }

      </ul>
  </nav>
);
Header.propTypes = {
    isLoggedIn: PropTypes.bool
};
/*Header.getInitialProps = ({isLoggedIn}) => {
    console.log(isLoggedIn);
    return isLoggedIn
};*/

export default Header;
