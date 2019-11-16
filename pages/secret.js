import SecureTemplate from '../public/secure-template';
import React from 'react'

function Secret(){
    return(
        <div>
            This is the secret page ! You can only see it when you are logged in !
        </div>
    );
}

export default SecureTemplate(Secret)