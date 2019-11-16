import SecureTemplate from '../public/secure-template';
import React from 'react'
import PropTypes from "prop-types";

function Secret({loggedInUser}){
    return(
        <div>
            { JSON.stringify(loggedInUser, null, 2) }
        </div>
    );
}
Secret.propTypes = {
    loggedInUser: PropTypes.object
};
/*Secret.getInitialProps = ({loggedInUser}) => {
    console.log(loggedInUser);
    return loggedInUser
};*/

export default SecureTemplate(Secret)