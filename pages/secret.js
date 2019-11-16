import SecureTemplate from '../public/secure-template';
import React from 'react'
import PropTypes from "prop-types";

function Secret({loggedInUser}){
    return(
        <div>
            This is the secret page ! You can only see it when you are logged in !
        </div>
    );
}
Secret.propTypes = {
    loggedInUser: PropTypes.object
};

export default SecureTemplate(Secret)