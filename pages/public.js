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
/*Secret.getInitialProps = ({loggedInUser}) => {
    console.log(loggedInUser);
    return loggedInUser
};*/

export default Template(Secret)