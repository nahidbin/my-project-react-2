import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center '> 
            <BsFillCheckCircleFill className='text-blue-600 mr-2'></BsFillCheckCircleFill>
            {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;