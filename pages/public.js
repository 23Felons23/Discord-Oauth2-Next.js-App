import Template from '../public/template';
import PropTypes from "prop-types";

function Secret({loggedInUser}){
    return(
        <div>
            hello
        </div>
    );
}
Secret.propTypes = {
    loggedInUser: PropTypes.object
};

export default Template(Secret)